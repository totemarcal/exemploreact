import React from 'react';
import useStateWithLocalStorage from './useStateWithLocalStorage'
import useStateWithSessionStorage from './useStateWithSessionStorage'

const StorageHook = () => {
  const [value, setValue] = useStateWithLocalStorage('myValueInLocalStorage');
 
  const [value2, setValue2] = useStateWithSessionStorage('myValueInSessionStorage');

  const onChange = event => setValue(event.target.value);
  const onChange2 = event => setValue2(event.target.value);
 
  return (
    <div>
      <h1>Olá, React com Local Storage!</h1>
 
      <input value={value} type="text" onChange={onChange} />
 
      <p>Local Storage: {value}</p>
      <p>Local Storage: {localStorage.getItem('myValueInLocalStorage')}</p>

      <input value={value2} type="text" onChange={onChange2} />
 
      <p>Session Storage: {value2}</p>
      <p>Session Storage: {sessionStorage.getItem('myValueInSessionStorage')}</p>
    </div>
  );
};
 
export default StorageHook;