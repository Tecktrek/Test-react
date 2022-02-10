import React, { Component, useEffect } from "react";

function api() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fecth("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const show = data.results;
        setUser(show);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
}

export default API;
