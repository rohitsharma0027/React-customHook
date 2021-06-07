import {useState,useEffect} from 'react';

// Mandatory to start our custome hook with "use"
const useCounter = () =>{
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


//   We need to return the data we need to use in our components
   return counter;

}

export default useCounter;