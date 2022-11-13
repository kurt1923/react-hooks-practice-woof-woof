import React from 'react'

function Detail({ selectedDog, updateDog }) {
    if (!selectedDog) return <h3>Select a Doggo</h3>

const {image, name, isGoodDog, id} = selectedDog

function handleClick() {
    fetch(`http://localhost:3006/pups/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isGoodDog: !isGoodDog,
      }),
    })
      .then((r) => r.json())
      .then(updateDog);
  }
    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={image} alt=""/>
                <h2>{name}</h2>
                <button onClick={handleClick}>{isGoodDog ? "Good" : "Bad"} Dog</button>
            </div>
        </div>
    )
}

export default Detail