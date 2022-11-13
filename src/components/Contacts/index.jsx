import React from 'react'
import ContactForm from '../ContactForm'

import s from './index.module.css'
import email_img from './media/email-img.png'
import {MobileOutlined, MailOutlined} from '@ant-design/icons'

export default function Contacts() {
  return (
    <section className = {s.container}>
        <div className = {['wrapper', s.contacts].join(' ')}>
          <section className = {s.contacts_container}>
            <h2 className = {s.title}>Связь с нами</h2>
            <p className = {s.text}>
            У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
            </p>
            <div className = {s.contacts_block}>
              <a href = 'tel:+71112223344'><MobileOutlined /> +7 (111) 222-33-44</a>
              <a href = 'mailto:+71112223344'>
                <MailOutlined /> order@bu-one.ru
              </a>
            </div>
          </section>
          <ContactForm />
        </div>
    </section>
  )
}
