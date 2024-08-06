import React, { useState, useEffect } from 'react';
import CardComponent from "../components/CardComponent"
import { renderTodayDate } from '../functions/renderTodayDate'

export const Guest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/all-data');
      console.log(response)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      console.log(renderTodayDate);
      const filteredData = result.filter(function(obj) {
        return obj.date > renderTodayDate() ;
      });
      
      setData(filteredData);
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
