import React from 'react'
import logo from './media/logo-img.png'
import menu_img from './media/menu-img.png'
import s from './index.module.css'

export default function Nav() {
  const menuShow = () => {
    const menu = document.querySelector('.nav_menu');
    const menuStyle = {
      display: 'block',
      flexDirection: 'column'
    }
    menu.style = menuStyle;
  }
  return (
    <nav className = {['wrapper', s.nav_block].join(' ')}> 
        <a href="#" className = {s.logo}>
            <img src={logo} alt="logo" />
        </a>
        <img onMouseOver = {menuShow} className = {s.menu_img} src = {menu_img}></img>
        <ul className = {s.nav_menu}>
            <li><a href='#'>Главная</a></li>
            <li><a href='#'>Услуги</a></li>
            <li><a href='#'>Кейсы</a></li>
            <li><a href='#'>О компании</a></li>
            <li><a href='#'>Контакты</a></li>
        </ul>
    </nav>
  )
}
