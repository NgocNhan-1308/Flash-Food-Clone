import './Menu.scss'
import { menu_list } from '../../assets/assets'


const Menu = ({category,setCategory}) => {

  return (
    <div className='expl-menu' id='expl-menu'>
      <h1>Khám phá thực đơn</h1>
      <div className="expl-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}className='expl-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default Menu


