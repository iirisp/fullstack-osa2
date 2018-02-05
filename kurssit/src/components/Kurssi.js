import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'
import Tehtavia from './Tehtavia'

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko nimi={kurssi.nimi}/>

            {kurssi.osat.map(osa => <Sisalto key={osa.id} osa={osa} tehtavia={osa.tehtavia}/>)}

            <Tehtavia tehtavia={kurssi.osat}/>

        </div>
    )
}


export default Kurssi
