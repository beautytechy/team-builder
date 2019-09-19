import React, { useState } from 'react';


const [newMember, setMember] = useState();

const member =
    [
        {
            id: 1,
            name: "Nicole",
            email: "nhollis@gmail.com",
            role: "Backend engineer",
        },
        {
            id: 2,
            name: "Nikki",
            email: "nikki@gmail.com",
            role: "Frontend engineer",
        },
        {   
            id: 3,
            name: "Nice",
            email: "nice@gmail.com",
            role: "Designer",
        },
    ]

setMember(member);

function Data() {

    return (
        <div>
            {member.map(item => {
                console.log(item);
                return (
                    <MemberCard
                        key={item.id}
                        name={item.name}
                        email={item.email}
                        role={item.role}
                    />
            )})
                }
        </div>
    )
}

export default Data