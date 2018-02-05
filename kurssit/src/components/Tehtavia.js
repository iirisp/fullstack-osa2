import React from 'react'

const Tehtavia = ({ tehtavia }) => {
    const teht = tehtavia.map(osa => osa.tehtavia)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const summa = () => (
        teht.reduce(reducer)
    )


    return (
        <p> Yhteensä {summa()} tehtävää</p>
    )
}

export default Tehtavia
