import { useState } from "react";
import Spinner from "./components/Spinner"

//this component displays jokes
function getJoke() {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState(null);

  function getJoke() {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }
  return (
    <>
      <button onClick={getJoke}>Get Joke</button>
      {loading ? (
        // <p>Loading...</p>
        <Spinner />
      ) : joke ? (
        <div>
          <h4>{joke.setup}</h4>
          <p>{joke.punchline}</p>
        </div>
      ) : null}
    </>
  );
}

export default getJoke;
