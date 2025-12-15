import React, { useState } from 'react';

const ProductItem = ({ productId, productName, onRemove }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleRemove = async () => {
        // Simple confirmation dialog
        if (!window.confirm("Are you sure you want to remove this product?")) return;

        setIsLoading(true);

        try {
            // Replace '/api/removeproduct' with your actual backend route
            const response = await fetch('http://localhost:3000/api/product/removeproduct', {
                method: 'POST', // Using POST since we are sending a Body
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: productId }), 
            });

            const data = await response.json();

            if (data.success) {
                alert(data.message);
                // Callback to update the UI (e.g., remove item from list)
                if (onRemove) onRemove(productId);
            } else {
                alert("Error: " + data.message);
            }

        } catch (error) {
            console.error("Network error:", error);
            alert("Failed to connect to server.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="product-card" style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
            <h3>{productName}</h3>
            <button 
                onClick={handleRemove} 
                disabled={isLoading}
                style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}
            >
                {isLoading ? 'Removing...' : 'Remove Product'}
            </button>
        </div>
    );
};

export default ProductItem;