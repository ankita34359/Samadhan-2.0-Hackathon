import ProductCard from "./ProductCard";

export default function App() {
  const products = [
    { name: "Headphones", price: 1999, image: "https://via.placeholder.com/150" },
    { name: "Smartwatch", price: 3499, image: "https://via.placeholder.com/150" },
    { name: "Shoes", price: 2499, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, index) => (
          <ProductCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
}
