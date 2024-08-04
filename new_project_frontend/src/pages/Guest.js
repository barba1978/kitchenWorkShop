import React, { useState, useEffect } from 'react';
import CardComponent from "../components/CardComponent"

export const Guest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/all-data");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API</h1>
      <div className='cardsContainer'>
        {data.map((item, index) => (
        <CardComponent item={item} />
        ))}
      </div>
    </div>
  );
};

export default Guest;
