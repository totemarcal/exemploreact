import React, { Component, useState, useEffect } from 'react';
export default function GreetingHook2() {

  const [firstName, setFirstName] = useState(() =>
    localStorage.getItem('hooksFirstName') || ''
  );
  const [lastName, setLastName] = useState(() =>
    localStorage.getItem('hooksLastName') || ''
  );

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const resetState = (e) => {
    setFirstName('')
    setLastName('')
  }

  useEffect(() => {
    localStorage.setItem('hooksFirstName', firstName);
    localStorage.setItem('hooksLastName', lastName);
  });

  return (
    <div>
      <input value={firstName} onChange={handleFirstNameChange} /><br />
      <input value={lastName} onChange={handleLastNameChange} />
      <p>
        Oi, <span>{firstName} {lastName}</span>
      </p>
      <button onClick={resetState}>Limpar</button>
    </div>
  );
}
