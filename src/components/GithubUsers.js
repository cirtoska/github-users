import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <section id="users">
        <h1>
          Git<span className="border">hub Us</span>ers
        </h1>
        <ul className="users">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id} className="userCard">
                <a href={html_url} target="_blank">
                  <img src={avatar_url} alt={login} />
                </a>
                <div className="profile">
                  <h3>{login}</h3>
                  <a href={html_url} target="_blank">
                    Profile on Github
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default GithubUsers;
