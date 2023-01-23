import React from 'react'
import Header from '../common/Header';
import NavBar from '../common/Nav';
import { Testemonials } from './Testemonials';
import Footer from './Footer';
import Hero from './Hero';
import Info from "./info"
import Specials from './specials';
import '../../App.css';
const HomePage = () => {
    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
            <Hero></Hero>
            <Specials></Specials>
            <Testemonials></Testemonials>
            <Info></Info>
            <Footer>
            </Footer></>
    )
}

export default HomePage