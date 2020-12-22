import React from 'react';

const useStateWithSessionStorage = sessionStorageKey => {
    const [value, setValue] = React.useState(
      sessionStorage.getItem(sessionStorageKey) || ''
    );
   
    React.useEffect(() => {
      sessionStorage.setItem(sessionStorageKey, value);
    }, [value]);
   
    return [value, setValue];
  };

  export default useStateWithSessionStorage