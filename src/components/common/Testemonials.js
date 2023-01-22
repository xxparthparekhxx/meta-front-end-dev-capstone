import React from 'react'
import { Grid, Row } from './Layout'

export const Testemonials = () => {
    const data = [
        {
            imgsrc: '/images/Mario and Adrian A.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem  perferendis fuga beatae, velit ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque.",
            Rating: "10/10"
        },
        {
            imgsrc: '/images/Mario and Adrian b.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem  perferendis fuga beatae, velit ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque.",
            Rating: "10/10"
        }, {
            imgsrc: '/images/Mario and Adrian A.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem  perferendis fuga beatae, velit ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque.",
            Rating: "10/10"
        }, {
            imgsrc: '/images/Mario and Adrian b.jpg',
            title: "greek salad",
            price: "100$",
            description: "Lorem ipsum dolor sit amet ullam id delectus architecto voluptas quam illum obcaecati ipsum est praesentium sunt cumque.",
            Rating: "10/10"
        },
    ]
    return (
        <div style={{ "background-color": "#495e57", color: "white",display:"flex",  justifyContent: 'center' }}>

            <div style={{maxWidth:"70%"}}>
                <h1>
                    Testemonials
                </h1>
                <Grid>

                    {
                        data.map(e => TestemonialItem(e))
                    }
                </Grid>
            </div>
        </div>
    )
}

export const TestemonialItem = ({ Rating, imgsrc, title, description }) => {
    return (
        <div style={{ width: '200px' , margin:"20px"}}>
            <h2 >
                {Rating}
            </h2>
            <Row styles={{ alignItems: "center" }}> <img src={imgsrc} style={{ width: "100px", margin: "5px" }} alt="" srcset="" /> <div>
                {title}
            </div>
            </Row>
            <p style={{ maxWidth: "100%",color: "white" }}>
                {description}
            </p>
        </div>
    )
}