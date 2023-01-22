import React from 'react'
import "./styles.css"
const Grid = ({ children }) => {
  return (
    <div className={'grid'}>{children}</div>
  )
}


const Row = ({ children, styles }) => {
  return (
    <section style={{ ...styles, display: "flex", flexDirection: 'row', flexWrap: "wrap" }}>{children}</section>
  )
}
const Column = ({ children }) => {
  return (
    <section style={{ display: "flex", flexDirection: 'column', flexWrap: "wrap" }}>{children}</section>
  )
}
const Padding =  ({ children })=>{
  return (
    <div style={{width: "70%"}}>  {children} </div>
  )
}
const Center = ({children})=>{
  return <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>{children}</div>
}

export { Grid, Row, Column, Padding, Center }