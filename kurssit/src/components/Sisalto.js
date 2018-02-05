import React from 'react'
import Osa from './Osa'

const Sisalto = ({ osa }) => {
  return (
    <div>
      <Osa key={osa.id} osa={osa} />
    </div>
  )
}

export default Sisalto
