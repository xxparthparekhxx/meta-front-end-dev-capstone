import React from 'react'
import { Link } from 'react-router-dom'
import { Center, Column, Grid, Padding, Row } from '../common/Layout'
import "../common/styles.css";
const Footer = () => {
    return (
        <footer style={{backgroundColor:"#495e57", marginTop:"100px"}}>
            <Center>

            <Padding>

            <Row  styles={{justifyContent:"space-between", maxWidth:"100%"}}>

            <img src="/images/Logo .svg" alt="" />
            <Row styles={{justifyContent:"space-evenly", width:"70%"}}>
                <Column>
                    <h1>
                        Doormat Navigation
                    </h1>
                    <Link className={"Link"}>Home</Link>
                    <Link className={"Link"}>about</Link>
                    <Link className={"Link"}>menu</Link>
                    <Link className={"Link"}>Reservations</Link>
                    <Link className={"Link"}>Order Online</Link>
                    <Link className={"Link"}>Login</Link>
                </Column>
                <Column>
                    <h1>
                        Contact
                    </h1>
                    <Link className={"Link"}>Address</Link>
                    <Link className={"Link"}>phone number</Link>
                    <Link className={"Link"}>email</Link>
                </Column>
                <Column>
                    <h1>Social Media Links</h1>
                    <Link className={"Link"}>Address</Link>
                    <Link className={"Link"}>Phone number</Link>
                    <Link className={"Link"}>email</Link>
                </Column>
            </Row>
            </Row>
            </Padding>
            </Center>
        </footer>
    )
}

export default Footer