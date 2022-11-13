import React from 'react'
import ServiceItem from '../ServiceItem'
import s from './index.module.css'
import { services } from '../../data/services'
export default function Services() {
  return (
    <section className = {s.service_bg}>
        <div className = {['wrapper', s.service_block].join(' ')}>
            <p className = 'subheader'>Наши услуги</p>
            <h2>Мы специализируемся</h2>
            <div className = {s.container}>
              {
                services.map(el =>  <ServiceItem {...el} key = {el.id}/>)
              }
            </div>
        </div>
    </section>
  )
}
