import { useEffect, useState } from 'react';

function useGreetingMessage() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreetingMessage = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        return 'Good Morning';
      } else if (currentHour >= 12 && currentHour < 17) {
        return 'Good Afternoon';
      } else if (currentHour >= 17 && currentHour < 21) {
        return 'Good Evening';
      } else {
        return 'Good Night';
      }
    };

    setGreeting(getGreetingMessage());
  }, []);

  return greeting;
}

export default useGreetingMessage;
