import React, { Component, useState, useEffect } from 'react';

function CounterHook2() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes.`
  }, []);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={incrementCount}>Clique aqui</button>
    </div>
  )
}

export default CounterHook2
