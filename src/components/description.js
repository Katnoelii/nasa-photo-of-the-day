import React from "react"

const Explanation = props => {

    return (
        <>
        <h2>{props.title}</h2>
        <time dateTime={props.date}>{props.date}</time>
        <p>{props.explanation}</p>
        </>
    )
}

export default Explanation;