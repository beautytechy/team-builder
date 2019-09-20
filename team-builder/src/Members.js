import React, { useState } from "react"
import MemberCard from "./MemberCard"

function Members() {
  const [member, setMember] = useState([{
    id: 1,
    name: "Nikki",
    email: "nikki@gmail.com",
    role: "developer",
  },
  {
    id: 2,
    name: "Nik",
    email: "nik@gmail.com",
    role: "designer",
  }
  ])

  const addNewMember = item => {
    const newMember = {
      id: Date.now(),
      name: item.name,
      email: item.email,
      role: item.role
    };

    setMember([...member, newMember])
  }
  return (
    <div>
      {member.map(info => {
        console.log(info);
        return (
          <MemberCard
            key={info.id}
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


