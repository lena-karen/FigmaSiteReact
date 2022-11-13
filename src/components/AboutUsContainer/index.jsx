import React from 'react'
import s from './index.module.css'
import ResultItem from '../ResultItem'

import { aboutUs } from '../../data/aboutUs'

export default function AboutUsContainer() {
  return (
    <section className={['wrapper', s.about_us_container].join(' ')}>
      <div className={s.container}>
        <p className = 'subheader'>О нас</p>
        <h2 className = {s.title}>Компания <span>ИвановПром</span></h2>
        <p className = {s.text}>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и 
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов 
            на латинице с начала XVI века. В то время некий безымянный печатник 
            создал большую коллекцию размеров и форм шрифтов, используя Lorem 
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно 
            пережил без заметных изменений пять веков, но и перешагнул в 
            электронный дизайн.
        </p>
      </div>
      <div className = {s.about_us_wrapper}>
        {
          aboutUs.map(el => <ResultItem {...el} key = {el.id}/>)
        } 
       </div>
    </section>
  /*  <div className = {['wrapper', s.about_us_container].join(' ')}>
        
        <div className = {s.about_us_wrapper}>
         
          <AboutUsResults />
        </div>
      
    </div>*/
  )
}
