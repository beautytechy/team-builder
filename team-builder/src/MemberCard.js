import React from 'react';
import './App.css';
import Data from "./Members"

const MemberCard = props => {
    console.log ("member card props",props)

    return (
        <div style={{margin: "10px auto", border: "2px solid red", width:"70%"}} key={props.index}>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Role:{props.role}</p>
            </div>
    )
}

export default MemberCard