import "./Challenges.css";
import { useState, useEffect } from "react";

const Challenges = () => {
  const [challengeData, setChallengeData] = useState();

  const [userSelection, setUserSelection] = useState();
  const [individualChallenge, setIndividualChallenge] = useState();

  const likedArray = [];
  const dislikedArray = [];

  useEffect(() => {
    fetch(
      "https://www.codewars.com/api/v1/users/andreahepworth/code-challenges/completed?page={1}"
    )
      .then((response) => response.json())
      .then((data) => setChallengeData(data))
      .catch((err) => console.log(err, "error fetching data"));
  }, []);

  useEffect(() => {
    if (userSelection) {
      fetch(`https://www.codewars.com/api/v1/code-challenges/${userSelection}`)
        .then((response) => response.json())
        .then((data) => setIndividualChallenge(data))
        .catch((err) => console.log(err, "error fetching data"));
    }
  }, [userSelection]);

  console.log(likedArray);

  return (
    <>
      <header className="AppHeader">
        <div className="HeaderBox">
          <text className="HeaderText">Challenges</text>
        </div>
        <div className="SearchContainer">
          <div className="SearchBox">
            <form>
              <select
                value={userSelection}
                onChange={(e) => setUserSelection(e.target.value)}
              >
                {challengeData ? (
                  challengeData.data.map((item, index) => {
                    return <option value={item.slug}>{item.slug}</option>;
                  })
                ) : (
                  <text>no results</text>
                )}
              </select>
            </form>
          </div>
          <div className="SearchResults">
            {individualChallenge ? (
              <>
                <div className="SearchResultsText">
                  <h3>{individualChallenge.name}</h3>
                  <p>{individualChallenge.description}</p>
                  <p>{individualChallenge.languages}</p>
                </div>
                <div className="buttonContainer">
                  <button
                    onClick={() => likedArray.push(individualChallenge.name)}
                    className="saveButton"
                  >
                    I like this
                  </button>
                  <button
                    onClick={() => dislikedArray.push(individualChallenge.name)}
                    className="saveButton"
                  >
                    I dont like this
                  </button>
                </div>
              </>
            ) : (
              <p>cannot find anything</p>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Challenges;
