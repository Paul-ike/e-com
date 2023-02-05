import React, {useState} from 'react'
import "./SideBar.css"
import Logo from "../../imgs/logo.png"
import { SideBarData } from '../../Data/Data'

function SideBar() {
    const [selected, setSelected] = useState(0)
  return (
    <div className='SideBar'>
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt=''/>
            <span>
                Ad<span>m</span>in
            </span>
        </div>
        {/* menu */}
        <div className='menu'>
            {SideBarData.map((item, index)=>{
                return(
                    <div className={selected===index?'menuItem active':'menuItem' }
                    key={index}
                    onClick={()=> setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SideBar