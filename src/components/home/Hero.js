import React from 'react'
import "./styles.css"
const Hero = () => {
    return (
        <section className='hero'>
            <article>

                <h1>
                    Little Lemon
                </h1>
                <h4>Chicago</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est repudiandae neque veniam impedit iusto recusandae dicta magnam ipsum enim quasi quas inventore consequuntur, perspiciatis corporis odit. Veritatis, quia amet!
                </p>
                <button>
                    Reserve a Table
                </button>
            </article>
            <img src="/images/restauranfood.jpg" alt="images of a brusheta" />
        </section>
    )
}

export default Hero