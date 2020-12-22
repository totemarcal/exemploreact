import React, { Component, useState, useEffect } from 'react';
export default function Greeting() {
  
  const [firstName, setFirstName] = useState("Bat");
  const [lastName, setLastName] = useState("Man");
  const [msg, setMsg] = useState();

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  useEffect(() => {
    setMsg(firstName + " " + lastName)
  }, [lastName]) 

  return (
    <div>
      <input value={firstName} onChange={handleFirstNameChange} /><br />
      <input value={lastName} onChange={handleLastNameChange} />
      <p>
        Oi, <span>{firstName} {lastName}</span> <br/>
      </p>
      <p>
        Msg: <span>{msg}</span> <br/>
        
      </p>
    </div>
  );
}