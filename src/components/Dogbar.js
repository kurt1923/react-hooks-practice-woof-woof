import React from 'react'

function Dogbar({ dogs, onClickDog }) {
    const dogbtns=dogs.map((dog)=> (
        <button key={dog.id} onClick={() => onClickDog(dog.id)} >{dog.name}</button>
    ))
    
    return (
        <div id="dog-bar">
            {dogbtns}
        </div>

    )
}

export default Dogbar