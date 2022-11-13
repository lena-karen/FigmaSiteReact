import React from 'react'

import s from './index.module.css'
/*const mouseOver = (event) => {
    event.target.backgroundImage = service_img_hover;
}
const mouseLeave = (event) => {
    event.target.backgroundImage = service_img;
}*/

export default function ServiceItem({title, img}) {
  const item_style = {
    backgroundImage: `url(${img})`
  }
  return (
    <div style = {item_style}  className = {s.service_item}>
       
        <p className = {s.service_desc}>{title}</p>
    </div>
  )
}
