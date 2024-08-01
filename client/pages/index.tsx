import React, {useEffect, useState} from 'react';

const Index = () => {
  const [message, setMessage] = useState("Loading");
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then((response) => response.json())
    .then((data) => {
      setMessage(data.message);
      setNames(data.names);
    });
  }, [])

  return (
  <div>
    <div>{message}</div>
  {
    names.map((name, index) => (
      <div key={index}>
        {name}
      </div>
    ))
  }
  </div>
  );
}

export default Index;
