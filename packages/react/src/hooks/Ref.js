import { useState, useEffect, useRef } from 'react';

export function WithRef() {
  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);

  console.log('before useEffect: ', count.current);
  useEffect(() => {
    count.current = count.current + 1;
    console.log('inside useEffect', count.current);
  });
  console.log('after useEffect: ', count.current);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
