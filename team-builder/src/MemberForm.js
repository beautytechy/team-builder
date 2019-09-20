import React, { useState } from 'react';


const MemberForm = () => {
    const [member, setMember] = useState();
    const handleChanges = e => {
        console.log(e.target.value);

        setMember({ member: e.target.value })
        console.log(member);
    }
    return (

        <form>
            <label htmlFor="name">Name</label>
            <input id="name"
                type="text"
                placeholder="name"
                name="title"
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
}

// const submitForm = e => {
//     e.preventDefault();
//     props.addNewMember(member);
//     setMember({name:"", email:"", role:""});
// };
export default MemberForm