import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataFromWebAPI() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44356/api/values/")
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>My Name List:</h1>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          {people.map((item, index) => (
            <tr key={index}>
              <td>{item.Firstname}</td>
              <td>{item.Lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchDataFromWebAPI;
