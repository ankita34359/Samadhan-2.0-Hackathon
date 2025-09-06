// ProductCard.jsx

```javascript
export default function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-60">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-600">₹{price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
}
```
