import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/fetch_data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cat Facts</h1>
      <table>
        <thead>
          <tr>
            <th>Fact</th>
            <th>Verified</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.fact}</td>
              <td>{item.verified}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetch;
