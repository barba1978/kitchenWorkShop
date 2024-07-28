import React, { useEffect, useState } from 'react';

function TestComponent() {
  const [message, setMessage] = useState('hello world');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default TestComponent;
