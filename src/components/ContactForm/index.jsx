import React from 'react'
import s from './index.module.css'

export default function ContactForm() {
  return (
    <form className = {s.form}>
       
        <div className = {s.input_block}>
          <label>
            <p>Имя</p>
            <input type="text" placeholder='Иван' name = 'firstname'/>
          </label>
        
          <label>
            <p>Фамилия</p>
            <input type="text" placeholder='Иванов' name = 'lastname'/>
          </label>

        </div>
        <label>
            <p>Сообщение</p>
            <textarea type="text" placeholder='Ваше сообщение' name = 'message'/>
        </label>
        <button className = {s.form_button}>Отправить сообщение</button>
    </form>
  )
}
