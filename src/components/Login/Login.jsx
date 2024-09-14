
import { useState } from 'react'
import './Login.scss'
import { assets } from '../../assets/assets'


const Login = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Đăng nhập")

  return (
    <div className='login'>
      <from className="login-container">
        <div className="login-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
            {currState==="Đăng nhập"?<></>:<input type="text" placeholder='Tên của bạn' required />}
            
            <input type="email" placeholder='Email của bạn' required />
            <input type="pasword" placeholder='Password' required />
          
        </div>
        <button>{currState==="Đăng kí"?"Tạo tài khoản":"Đăng nhập"}</button>
        <div className="login-condition">
            <input type="checkbox" required />
            <p>Tôi đồng ý với thỏa thuận người dùng.</p>
        </div>
        {
            currState==="Đăng nhập" ? <p>Tạo tài khoản mới <span onClick={()=>setCurrState("Đăng kí")}>Nhấp vào đây</span></p>
            :<p>Bạn đã có tài khoản ? <span onClick={()=>setCurrState("Đăng nhập")}>Đăng nhập ngay</span></p>
        }
        
        
      </from>
    </div>
  )
}

export default Login
