import React, { useState } from 'react';
import './App.css';
import Members from "./Members"
import MemberForm from "./MemberForm"
import addNewMember from "./MemberForm"


function App() {
  const [members, setMember] = useState([{
    name: "Nikki",
    email: "nikki@gmail.com",
    role: "developer",
  },
  {
    name: "Nik",
    email: "nik@gmail.com",
    role: "designer",
  }
  ])

const addNewMember = (member) => {
    setMember([...members, member]);
}

  return (
    <div className="App">
      <h1>Team Member</h1>
      <Members memberProps={members} />
      <MemberForm addNewMemberprops={addNewMember} />
    </div>
  )
}

export default App;
