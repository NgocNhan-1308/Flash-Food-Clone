import { useContext } from "react";
import "./Order.scss";
import { StoreContext } from "../../context/StoreContext";
const Order = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="order" action="">
      <div className="order-left">
        <p className="title">Phương thức vận chuyển</p>
        <div className="multi-fields">
          <input type="text" placeholder="Họ" />
          <input type="text" placeholder="Tên" />
        </div>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Địa chỉ" />
        <div className="multi-fields">
          <input type="text" placeholder="Thành phố" />
          <input type="text" placeholder="Tình trạng" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Mã giảm giá" />
          <input type="text" placeholder="Quốc gia" />
        </div>
        <input type="text" placeholder="Số điện thoại" />
      </div>
      <div className="order-right">
        <div className="cart-total">
          <h2>Tổng giỏ hàng</h2>
          <div className="cart-total-details">
            <p>Giá tiền:</p>
            <p>{getTotalCartAmount()} VNĐ</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Phí vận chuyển:</p>
            <p>{getTotalCartAmount() === 0 ? 0 : 5} VNĐ</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Tổng tiền :</b>
            <b>
              {" "}
              {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5} VNĐ
            </b>
          </div>
          <button>THANH TOÁN</button>
        </div>
      </div>
    </form>
  );
};

export default Order;
