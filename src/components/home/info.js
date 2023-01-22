import React from 'react'
import "./styles.css"
const Info = () => {
  return (
    <section className='center'>
    <section className='hero2'>
        <article>
            <h1>
                Little Lemon
            </h1>
            <h4>Chicago</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est repudiandae neque veniam impedit iusto recusandae dicta magnam ipsum enim quasi quas inventore consequuntur, perspiciatis corporis odit. Veritatis, quia amet!
            </p>
        </article>
        <div style={{position:"relative"}}>

        <img src="/images/restauranfood.jpg" alt="images of a brusheta" />
        <img style={{
            position:"absolute",
            left: -100,
            top:100,
        }} src="/images/restauranfood.jpg" alt="images of a brusheta" />
        </div>
    </section>
    </section>
  )
}

export default Info