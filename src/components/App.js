import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Dogbar from "./Dogbar";
import Detail from "./Detail";


function App() {

  const [dogs, setDogs] = useState([])
  const [selectDogId, setSelectDogId] = useState(null)
  const [dogFilter, setDogFilter] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3006/pups")
      .then((r) => r.json())
      .then(setDogs)
  }, [])

  function updateDog(updatedDog) {
    const updatedDogs = dogs.map((dog) => dog.id === updatedDog.id ? updatedDog : dog)
    setDogs(updatedDogs)
  }

  function handleDogfilter() {
    setDogFilter((dogFilter) => !dogFilter)
  }
  const selectedDog = dogs.find((dog) => dog.id === selectDogId)

  const displayDogs = dogFilter ? dogs : dogs.filter((dog) => dog.isGoodDog)

  return (
    <div className="App">
      <Filter handleDogfilter={handleDogfilter} dogFilter={dogFilter} />
      <Dogbar dogs={displayDogs} onClickDog={setSelectDogId} />
      <Detail selectedDog={selectedDog} updateDog={updateDog} />
    </div>
  );
}

export default App;
