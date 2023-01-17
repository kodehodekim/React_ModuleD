import { useState, useEffect } from "react";

function GetDogAPI() {
  const [dogFact, setDogFact] = useState();
  const [dataPull, setDataPull] = useState();

  useEffect(() => {
    fetch("https://dog-api.kinduff.com/api/facts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDogFact(data.facts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dogFact) return <h1>Loading API data...</h1>;

  return (
    <>
      <div className="factContainer">
        <h3>Random dog fact:</h3>
        <h3>-</h3>
        <p>{dogFact}</p>
      </div>
    </>
  );
}

export default GetDogAPI;
