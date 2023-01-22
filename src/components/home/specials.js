import React from 'react'
import { Center, Grid, Padding, Row } from "../common/Layout"
const Specials = () => {
    const data = [
        {
            imgsrc: '/images/greek salad.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis cupiditate alias aliquid, perferendis fuga beatae, velit ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque."
        },
        {
            imgsrc: '/images/greek salad.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis cupiditate alias aliquid, perferendis fuga beatae, velit ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque."
        },
        {
            imgsrc: '/images/greek salad.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis cupiditate alias aliquid, perferendis fuga beatae, velit ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque."
        },
        {
            imgsrc: '/images/greek salad.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis cupiditate alias aliquid, perferendis fuga beatae, velit ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque."
        },
        {
            imgsrc: '/images/greek salad.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis cupiditate alias aliquid, perferendis fuga beatae, velit ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque."
        },
        {
            imgsrc: '/images/greek salad.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis cupiditate alias aliquid, perferendis fuga beatae, velit ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque."
        },
    ]


    return (
        <section>
            <Center>
                <div>
                    <Row styles={{ justifyContent: "space-between" }}>

                        <h2>Specials</h2>
                        <button>

                            Online Menu
                        </button>
                    </Row>
                    <Grid>
                        {data.map(e => <SpecialItems {...e} />)}
                    </Grid>
                </div>
            </Center>
        </section>
    )
}


export const SpecialItems = ({ title, imgsrc, price, description }) => {
    return (
        <article style={{ width: "300px" , backgroundColor:"#EDEFEE", padding:"20px",margin:"20px", borderRadius:"10px"}}>
            <img src={imgsrc} style={{ width: "300px" ,borderRadius:"10px"}} alt={`${title} image`} />
            <Row styles={{justifyContent:"space-between"}}>
                <h2>{title}</h2>
                <h2 style={{color:'orange' }}>
                    {price}
                </h2>
            </Row>
            <p style={{color:'black', "max-width":"100%"}}>
                {description}
            </p>
            <h2>
                Order a delivery 🛵
            </h2>
        </article>
    )
}


export default Specials