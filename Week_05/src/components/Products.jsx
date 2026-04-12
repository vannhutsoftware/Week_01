import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/products/1">Iphone</Link>
        </li>
        <li>
          <Link to="/products/2">Samsung</Link>
        </li>
        <li>
          <Link to="/products/3">Laptop</Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
