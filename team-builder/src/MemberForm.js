import React, { useState } from 'react';


const MemberForm = (props) => {
    const [newMember, addnewMember] = useState({});
    const handleChanges = e => {
        console.log(e.target.value);

        addnewMember({...newMember,[e.target.name]: e.target.value })
        console.log(newMember);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const addNewMember = props.addNewMemberprops;
        addNewMember(newMember)
    }
    return (
      
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                placeholder="name"
                name="name"
                onChange={handleChanges} />

            <label htmlFor="email">Email</label>
            <input id="email"
                type="email"
                placeholder="email address"
                name="email"
                onChange={handleChanges} />

            <label htmlFor="role">Role</label>
            <input id="role"
                type="text"
                placeholder="job title"
                name="role"
                onChange={handleChanges} />
            <button type="submit">Submit</button>

      
  
        </form>

    )
    
        };





export default MemberForm