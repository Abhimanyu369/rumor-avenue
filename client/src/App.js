import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);
  const handleChange = (e) => {
    setPhoto(e.target.value);
  };
  const handleSubmit = (e) => {
    const client_id = "AaISGBMnbPI42EctC5Bw7r3kotp8UYGIpQNiexrENv4";
    const url = `https://api.unsplash.com/search/photos?page=1&per_page=9&query=${photo}&client_id=${client_id}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setResult(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(photo);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>My App</p>
        <input
          type="text"
          name="photo"
          placeholder="Search"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
        {result.map((item) => (
          <img src={item.urls.small} alt="photoun" />
        ))}
      </header>
    </div>
  );
}

export default App;
