import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cat-fact.herokuapp.com/facts');
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
          {data.map((fact, index) => (
            <tr key={index}>
              <td>{fact.text}</td>
              <td>{fact.status.verified.toString()}</td>
              <td>{new Date(fact.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetch;
