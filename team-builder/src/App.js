import React, { useState } from 'react';
import './App.css';
import Members from "./Members"
import MemberForm from "./MemberForm"

function App() {

  return (
    <div className="App">
      <h1>Team Member</h1>
      <Members />
      <MemberForm />
      {/* <MemberForm addNewMember={addNewMember}/> */}
    </div>
  )
}

export default App;
