import { useContext } from "react";
import "./Cart.scss";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Mặt hàng</p>
          <p>Tiêu đề</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng tiền</p>
          <p>Xóa</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} VNĐ</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} VNĐ</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="total">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Tổng giỏ hàng</h2>
            <div className="cart-total-details">
              <p>Giá tiền:</p>
              <p>{getTotalCartAmount()} VNĐ</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí vận chuyển:</p>
              <p>{getTotalCartAmount()===0 ? 0:5} VNĐ</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Tổng tiền :</b>
              <b> {getTotalCartAmount()===0?0:getTotalCartAmount() + 5} VNĐ</b>
            </div>
            <button onClick={() => navigate("/order")}>
              TIẾN HÀNH THANH TOÁN
            </button>
          </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nếu bạn có mã khuyến mãi ! Nhập tại đây.</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Mã khuyến mãi" />
              <button>Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
