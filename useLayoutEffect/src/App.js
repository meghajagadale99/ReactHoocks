import React, { useLayoutEffect, useState } from 'react';
  
const App = () => {
  
  const [value, setValue] = useState('Hello');
    
  useLayoutEffect(() => {
    if (value === 'Hello') {
     // Changing the state 
      setValue('Welcome');
    }
    console.log('UseLayoutEffect is called with the value of ', value);
  }, [value]);
  
  return <div>{value} To the Portal!</div>;
};
  
export default App;