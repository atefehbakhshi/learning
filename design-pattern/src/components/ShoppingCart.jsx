import withAuth from "../components/Hoc";

// Example component using withAuth HOC
function ShoppingCart({ items }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

const ShoppingCartWithAuth = withAuth(ShoppingCart);

export default ShoppingCartWithAuth;
