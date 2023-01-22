import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
const NavBar = ({ selected }) => {
    const routes = [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        { name: "Menu", route: "/menu" },
        { name: "Reservations", route: "reservations" },
        { name: "Order Online", route: "order-online" },
        { name: "Login", route: "login" }
    ]
    return (

        <nav>
            <section>
                <img src="/images/Logo.svg" alt="" />
                <ul>
                    {
                        routes.map(e => <li key={e.name}><Link className='Link' to={e.route}>{e.name}</Link></li>)
                    }
                </ul>
            </section>
        </nav>
    )
}

export default NavBar