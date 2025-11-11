import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';
import pic7 from '../assets/pic7.png';
import pic8 from '../assets/pic8.png';
import pic9 from '../assets/pic9.png';
import pic10 from '../assets/pic10.png';
import pic11 from '../assets/pic11.png';
import pic12 from '../assets/pic12.png';
import pic13 from '../assets/pic13.png';
import pic14 from '../assets/pic14.png';
import pic15 from '../assets/pic15.png';

const products = [
  {
    _id: "prod001",
    name: "Women Round Neck Cotton Top",
    description: "A lightweight, knitted pullover shirt, close-fitting and with a round neckline. Perfect for casual wear.",
    price: 100,
    image: pic1,
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: false
  },
  {
    _id: "prod002",
    name: "Men's Classic Denim Jacket",
    description: "A timeless denim jacket with button-front closure and two chest pockets. Made from 100% durable cotton.",
    price: 250,
    image: pic2,
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1716634450123,
    bestseller: false
  },
  {
    _id: "prod003",
    name: "Women's High-Waist Trousers",
    description: "Elegant high-waist trousers with a wide-leg cut. Features a side zipper and is made from a breathable linen blend.",
    price: 180,
    image: pic3,
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634560456,
    bestseller: false
  },
  {
    _id: "prod004",
    name: "Men's Graphic Print T-Shirt",
    description: "Comfortable cotton t-shirt with a vintage-style graphic print on the chest. Crew neck and short sleeves.",
    price: 90,
    image: pic4,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634670789,
    bestseller: false
  },
  {
    _id: "prod005",
    name: "Kids' Striped Hoodie",
    description: "A cozy and soft hoodie for kids with a colorful striped pattern and a front kangaroo pocket.",
    price: 120,
    image: pic5,
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: 1716634780101,
    bestseller: false
  },
  {
    _id: "prod006",
    name: "Women's Leather Crossbody Bag",
    description: "A compact and stylish crossbody bag made from genuine leather, featuring an adjustable strap and multiple compartments.",
    price: 300,
    image: pic6,
    category: "Women",
    subCategory: "Accessories",
    sizes: ["One Size"],
    date: 1716634890202,
    bestseller: false
  },
  {
    _id: "prod001",
    name: "Women Round Neck Cotton Top",
    description: "A lightweight, knitted pullover shirt, close-fitting and with a round neckline. Perfect for casual wear.",
    price: 100,
    image: pic7,
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: false
  },
  {
    _id: "prod002",
    name: "Men's Classic Denim Jacket",
    description: "A timeless denim jacket with button-front closure and two chest pockets. Made from 100% durable cotton.",
    price: 250,
    image: pic8,
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1716634450123,
    bestseller: false
  },
  {
    _id: "prod003",
    name: "Women's High-Waist Trousers",
    description: "Elegant high-waist trousers with a wide-leg cut. Features a side zipper and is made from a breathable linen blend.",
    price: 180,
    image: pic9,
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634560456,
    bestseller: true
  },
  {
    _id: "prod004",
    name: "Men's Graphic Print T-Shirt",
    description: "Comfortable cotton t-shirt with a vintage-style graphic print on the chest. Crew neck and short sleeves.",
    price: 90,
    image: pic10,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634670789,
    bestseller: true
  },
  {
    _id: "prod005",
    name: "Kids' Striped Hoodie",
    description: "A cozy and soft hoodie for kids with a colorful striped pattern and a front kangaroo pocket.",
    price: 120,
    image: pic11,
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: 1716634780101,
    bestseller: false
  },
  {
    _id: "prod006",
    name: "Women's Leather Crossbody Bag",
    description: "A compact and stylish crossbody bag made from genuine leather, featuring an adjustable strap and multiple compartments.",
    price: 300,
    image: pic12,
    category: "Women",
    subCategory: "Accessories",
    sizes: ["One Size"],
    date: 1716634890202,
    bestseller: true
  },
  {
    _id: "prod001",
    name: "Women Round Neck Cotton Top",
    description: "A lightweight, knitted pullover shirt, close-fitting and with a round neckline. Perfect for casual wear.",
    price: 100,
    image: pic13,
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true
  },
  {
    _id: "prod002",
    name: "Men's Classic Denim Jacket",
    description: "A timeless denim jacket with button-front closure and two chest pockets. Made from 100% durable cotton.",
    price: 250,
    image: pic14,
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1716634450123,
    bestseller: true
  },
  {
    _id: "prod003",
    name: "Women's High-Waist Trousers",
    description: "Elegant high-waist trousers with a wide-leg cut. Features a side zipper and is made from a breathable linen blend.",
    price: 180,
    image: pic15,
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634560456,
    bestseller: true
  },
  {
    _id: "prod004",
    name: "Men's Graphic Print T-Shirt",
    description: "Comfortable cotton t-shirt with a vintage-style graphic print on the chest. Crew neck and short sleeves.",
    price: 90,
    image: pic4,
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634670789,
    bestseller: true
  },
  {
    _id: "prod005",
    name: "Kids' Striped Hoodie",
    description: "A cozy and soft hoodie for kids with a colorful striped pattern and a front kangaroo pocket.",
    price: 120,
    image: pic5,
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: 1716634780101,
    bestseller: false
  },
  {
    _id: "prod006",
    name: "Women's Leather Crossbody Bag",
    description: "A compact and stylish crossbody bag made from genuine leather, featuring an adjustable strap and multiple compartments.",
    price: 300,
    image: pic6,
    category: "Women",
    subCategory: "Accessories",
    sizes: ["One Size"],
    date: 1716634890202,
    bestseller: true
  },
];

export default products;
