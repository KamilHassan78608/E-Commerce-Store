import { Mail } from "lucide-react";

export default function Subscribe() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <div className="shadow-lg rounded-2xl p-8 text-center">
        <Mail className="w-12 h-12 text-gray-500 mx-auto mb-3" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Subscribe to our Dukam
        </h2>
        <p className="text-gray-500 mb-6">
          Get the latest updates, articles, and resources — straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 outline-none text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-3 font-medium hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
