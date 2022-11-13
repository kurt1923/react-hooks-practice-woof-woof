import React from 'react'

function Filter({ dogFilter, handleDogfilter }) {



    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={handleDogfilter}>
                Filter good dogs: {dogFilter ? "ON" : "OFF"}
            </button>
        </div>
    )
}

export default Filter