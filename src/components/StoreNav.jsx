import { Link } from "react-router-dom";
import { ShoppingCart, User } from "phosphor-react";

const StoreNav = () => {
  return (
    <div className="storenav">
      <Link to="/band-app" className="logo">
        <h1>Disco Fighter</h1>
      </Link>
      <nav className="storenav-links">
        <Link to="/band-app/store">Store Home</Link>
        <Link to="/band-app/music">Music</Link>
        <Link to="/band-app/apparel">Apparel</Link>
        <Link to="/band-app/accessories">Accessories</Link>
        <div className="user">
          <Link to="/band-app/login">
            <User size={32} weight="fill" />
          </Link>
          <Link to="/band-app/shopping-cart">
            <ShoppingCart size={32} weight="fill" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default StoreNav;
