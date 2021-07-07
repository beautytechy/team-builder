import React, { useState } from "react"
import MemberCard from "./MemberCard"

function Members(props) {

  return (
    <div>
      {props.memberProps.map((info, index) => {
        console.log(info);
        return (
          <MemberCard
            key={index}
            name={info.name}
            email={info.email}
            role={info.role}

          />
        )
      })
      }
    </div>
  )

}



export default Members


