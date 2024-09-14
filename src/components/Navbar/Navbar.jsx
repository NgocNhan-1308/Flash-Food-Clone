import { useContext, useState } from "react";
import "../Navbar/Navbar.scss";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Thực đơn");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Trang chủ")}
          className={menu === "Trang chủ" ? "active" : ""}
        >
          Trang chủ
        </Link>
        <a
          href="#expl-menu"
          onClick={() => setMenu("Thực đơn")}
          className={menu === "Thực đơn" ? "active" : ""}
        >
          Thực đơn
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Liên hệ")}
          className={menu === "Liên hệ" ? "active" : ""}
        >
          Liên hệ
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile app")}
          className={menu === "Mobile app" ? "active" : ""}
        >
          Tải ứng dụng
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="logo__search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Đăng nhập</button>
      </div>
    </div>
  );
};

export default Navbar;
