import React, {useState} from 'react'
import './Card.css'
import { AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Card(props) {
  const [expanded, setExpanded] = useState(false)
  return (

    <AnimateSharedLayout>
      {
        expanded? (
          'Expanded'
        ):
        <CompactCard param ={props} setExpanded={()=>setExpanded(true)} />
      }

    </AnimateSharedLayout>
    
  )
}
// CompactCard
function CompactCard({param}){
  const Png = param.png
  return(
    <div className='CompactCard'
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow
    } }
    
    >
      <div className='radialBar'>
        <CircularProgressbar
        value={param.barValue}
        text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
        <div className='detail'>
          <Png/>
          <span>${param.value}</span>
        
        </div>
    </div>
  )

}

export default Card