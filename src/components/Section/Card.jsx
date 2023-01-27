import React from 'react'
import "..//../Styles/card.css"
import web from '../../assets/images/ellipse 2.png'
import web1 from '../../assets/images/ellipse 3.png'
import web2 from '../../assets/images/ellipse 4.png'


export default function Card(props) {
  return (
    <>
      <section>
      <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">{props.contentout}</p>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            <p class="title">{props.contentin}</p>
        </div>
    </div>
</div>
      </section>
        
    </>
  )
}
