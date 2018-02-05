import React from 'react'

const NewPerson = ({ name, number, nameHandle, numberHandle }) => {
    return (
        <div>
            <div>
                nimi: <input value={name} onChange={nameHandle} />
            </div>
            <div>
                numero : <input value={number} onChange={numberHandle} />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </div>
    )
}

export default NewPerson
