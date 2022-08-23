
import React, { useEffect, useState } from "react";
function HomeScreen() {
  const [Countries, setCountries] = useState([]);
  const [isPending, setIsPendin] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch(() => console.log("err"))
      .finally(() => {
        setIsPendin(false);
      });
  }, []);
  if (isPending) return <h1>is loading.......</h1>;
  return (
    <div>
      {Countries.map((country) => (
        <div children="card">
          <img src={country.flag.png} alt={country.name.commom} />
          <h5>{country.name.commom}</h5>
        </div>
      ))}
    </div>
  );
}

export default HomeScreen;
