import React from 'react';
import './App.css';
import Data from "./Data"

const MemberCard = props => {
    console.log (props)

    return (
        <div key={props.index}>
            <h1>Name: {props.name}</h1>
            </div>
    )
}

export default MemberCard