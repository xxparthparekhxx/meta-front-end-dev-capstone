
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import NavBar from "../common/Nav";
import './styles.css'
import Footer from "../home/Footer";
import TabBar from "../common/tabbar";
import { Row } from "../common/Layout";




export const BookingPage = () => {
    const [Reservations, setReservations] = useState([])

    useEffect(() => {
        const res = localStorage.getItem("reservations")
        if(res != null){
            
            setReservations()
        }
        return () => {

        }
    }, [])

    return (
        <>
            <NavBar></NavBar>
            <nav>

                <TabBar
                    Tabs={[
                        {
                            children: [
                                <ReservationForm reservations={Reservations} setReservations={(e) => {
                                    setReservations([...Reservations, e]);
                                    localStorage.setItem("reservations", Reservations)
                                }} />
                            ],
                            Name: "Book a table"
                        },
                        {
                            children: [
                                <SeeReservation reservations={Reservations} />
                            ],
                            Name: "See Reservations"
                        },
                    ]}>
                </TabBar>
            </nav>
            <Footer></Footer>
        </>
    )
}

const SeeReservation = ({ reservations }) => {
    return <div>
        {
            reservations.map((e, i) => {
                return <div key={JSON.stringify(e)} style={{ padding: "10px", backgroundColor: "white", borderRadius: "10px", margin: '10px', boxShadow: " 1px 1px 1px black" }}>
                    <Row styles={{ justifyContent: "space-between" }}><div>
                        {e.reservationDate}
                    </div>
                        <div>
                            {e.reservationTime}
                        </div>
                        <div>{e.guests}</div>
                        <div>{e.occasion}</div>
                    </Row>
                </div>
            })
        }
    </div>
}

export const ReservationForm = ({ setReservations, reservations }) => {
    const validateReservation = values => {
        const errors = {};

        if (!values.reservationDate) {
            errors.reservationDate = "Date is required";
        }

        if (!values.reservationTime) {
            errors.reservationTime = "Time is required";
        }

        if (!values.guests) {
            errors.guests = "Number of guests is required";
        } else if (values.guests < 1 || values.guests > 10) {
            errors.guests = "Number of guests should be between 1 and 10";
        }

        if (!values.occasion) {
            errors.occasion = "Occasion is required";
        }
        console.log(errors)

        return errors;
    };

    const onSubmitHandler = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        console.log(values)
        setReservations(values)
        // Do something with the form data here
        await resetForm();
        setSubmitting(false);
    };
    const resrevedHours = reservations?.length > 0 ? reservations.map(e => e.reservationTime) : []
    console.log(resrevedHours)
    const OpenHours = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]

    return (
        <section>


            <main>

                <Formik
                    initialValues={{
                        reservationDate: "",
                        reservationTime: "",
                        guests: "",
                        occasion: ""
                    }}
                    validate={validateReservation}
                    onSubmit={onSubmitHandler}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <label htmlFor="reservationDate">Choose date</label>
                            <Field type="date" name="reservationDate" id="reservationDate" />
                            {errors.reservationDate && touched.reservationDate ? (
                                <div style={{ color: "red" }}>{errors.reservationDate}</div>
                            ) : null}
                            <label htmlFor="reservationTime">Choose time</label>
                            <Field as="select" name="reservationTime" id="reservationTime">
                                <option key="ni"></option>
                                {OpenHours.map(e => {
                                    console.log(!(e in resrevedHours), e, resrevedHours)
                                    let reserved = false;
                                    for (let i = 0; i < resrevedHours.length; i++) {
                                        if (resrevedHours[i] == e) {
                                            reserved = true
                                        }
                                    }
                                    if (reserved) {
                                        return <></>
                                    } else {
                                        return <option key={e}>{e}</option>
                                    }
                                })}
                            </Field>
                            {errors.reservationTime && touched.reservationTime ? (
                                <div style={{ color: "red" }}>{errors.reservationTime}</div>
                            ) : null}
                            <label htmlFor="guests">Number of guests</label>
                            <Field type="number" name="guests" placeholder="Num" min="1" max="10" id="guests" />
                            {errors.guests && touched.guests ? (
                                <div style={{ color: "red" }}>{errors.guests}</div>
                            ) : null}
                            <label htmlFor="occasion">Occasion</label>
                            <Field as="select" default={"Birthday"} name="occasion" id="occasion">
                                <option></option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </Field>
                            {errors.occasion && touched.occasion ? (
                                <div style={{ color: "red" }}>{errors.occasion}</div>
                            ) : null}
                            <button type="submit" disabled={isSubmitting}>
                                Make Your reservation
                            </button>
                        </Form>
                    )}
                </Formik>
            </main>
        </section>
    );
};
export default BookingPage;