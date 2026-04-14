import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";

const plants = [
  // Indoor (6)
  { id: "i1", category: "Indoor", name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1587502536263-9298a7f7f9a0?auto=format&fit=crop&w=800&q=60" },
  { id: "i2", category: "Indoor", name: "Peace Lily", price: 349, image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=800&q=60" },
  { id: "i3", category: "Indoor", name: "Spider Plant", price: 199, image: "https://images.unsplash.com/photo-1614594895304-fe711de0bc3b?auto=format&fit=crop&w=800&q=60" },
  { id: "i4", category: "Indoor", name: "ZZ Plant", price: 399, image: "https://images.unsplash.com/photo-1615486364183-64f4a0d2972b?auto=format&fit=crop&w=800&q=60" },
  { id: "i5", category: "Indoor", name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1615485737651-580b4f1f1a52?auto=format&fit=crop&w=800&q=60" },
  { id: "i6", category: "Indoor", name: "Rubber Plant", price: 459, image: "https://images.unsplash.com/photo-1615486363260-6a7e7f529c1e?auto=format&fit=crop&w=800&q=60" },

  // Succulents (6)
  { id: "s1", category: "Succulents", name: "Aloe Vera", price: 159, image: "https://images.unsplash.com/photo-1524593175384-50c9972a2f71?auto=format&fit=crop&w=800&q=60" },
  { id: "s2", category: "Succulents", name: "Jade Plant", price: 179, image: "https://images.unsplash.com/photo-1622659765746-1ac8c1c4d1db?auto=format&fit=crop&w=800&q=60" },
  { id: "s3", category: "Succulents", name: "Echeveria", price: 129, image: "https://images.unsplash.com/photo-1614594895304-fe711de0bc3b?auto=format&fit=crop&w=800&q=60" },
  { id: "s4", category: "Succulents", name: "Haworthia", price: 149, image: "https://images.unsplash.com/photo-1524593175384-50c9972a2f71?auto=format&fit=crop&w=800&q=60" },
  { id: "s5", category: "Succulents", name: "Sedum", price: 119, image: "https://images.unsplash.com/photo-1524593175384-50c9972a2f71?auto=format&fit=crop&w=800&q=60" },
  { id: "s6", category: "Succulents", name: "Cactus Mix", price: 199, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=60" },

  // Air Purifiers (6)
  { id: "a1", category: "Air Purifiers", name: "Money Plant", price: 149, image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=800&q=60" },
  { id: "a2", category: "Air Purifiers", name: "Boston Fern", price: 329, image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=800&q=60" },
  { id: "a3", category: "Air Purifiers", name: "Bamboo Palm", price: 449, image: "https://images.unsplash.com/photo-1615485737651-580b4f1f1a52?auto=format&fit=crop&w=800&q=60" },
  { id: "a4", category: "Air Purifiers", name: "English Ivy", price: 199, image: "https://images.unsplash.com/photo-1587502536263-9298a7f7f9a0?auto=format&fit=crop&w=800&q=60" },
  { id: "a5", category: "Air Purifiers", name: "Dracaena", price: 379, image: "https://images.unsplash.com/photo-1615486364183-64f4a0d2972b?auto=format&fit=crop&w=800&q=60" },
  { id: "a6", category: "Air Purifiers", name: "Philodendron", price: 259, image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=800&q=60" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div>
      {categories.map((cat) => (
        <div key={cat}>
          <div className="section-title">{cat}</div>
          <div className="grid">
            {plants
              .filter((p) => p.category === cat)
              .map((p) => {
                const alreadyAdded = cartItems.some((x) => x.id === p.id);

                return (
                  <div key={p.id} className="card">
                    <img src={p.image} alt={p.name} />
                    <h3>{p.name}</h3>
                    <p>₹ {p.price}</p>

                    <button
                      className="btn"
                      disabled={alreadyAdded}
                      onClick={() => dispatch(addToCart(p))}
                    >
                      {alreadyAdded ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
