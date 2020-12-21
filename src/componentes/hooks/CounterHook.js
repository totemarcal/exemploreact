import React, { useState } from 'react';

const CounterHook = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <p>Você clicou {count} vezes.</p>
      <button onClick={incrementCount}>Clique aqui</button>
    </div>
  )
}

export default CounterHook;