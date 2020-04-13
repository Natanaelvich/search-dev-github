import React, { useState } from "react";
import api from "./services/api";

import UserList from "./components/UserList";

import "./App.css";
import logo from "./assets/github-logo.svg";

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);

  async function getUser(e) {
    e.preventDefault();

    const response = await api.get(`users/${name}`);
    setUser(response.data);
  }
  return (
    <div className="App">
      <div className="form">
        <div className="title">
          <img src={logo} alt="github" />
          <h1>Form GitHub</h1>
        </div>
        <form onSubmit={getUser}>
          <input
            value={name}
            onChange={(text) => setName(text.target.value)}
            type="text"
            placeholder="Seu nick no github"
          />
          <button type="submit">BUSCAR</button>
        </form>
      </div>
      {user !== null && <UserList user={user} />}
    </div>
  );
}

export default App;
