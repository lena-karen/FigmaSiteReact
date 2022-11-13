import React from 'react'
import s from './index.module.css'

export default function Footer() {
  return (
    <div className = {['wrapper', s.footer].join(' ')}>
        <p>2019 (с) Все права защищены. БухОне.ру</p>
        <p>Разработано: BuhOne</p>
    </div>
  )
}
