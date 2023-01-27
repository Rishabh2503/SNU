import React from "react"


export default function Footer() {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by Team Cloud</p>
    )
}



const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}