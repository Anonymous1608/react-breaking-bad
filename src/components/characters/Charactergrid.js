import React from 'react'
import Charactershow from './Charactershow';
import Spinner from '../ui/Spinner';

const Charactergrid = ( { chars, isLoading } ) => {
  return isLoading ? (<Spinner />)  : <section className='cards'>
      {chars.map((char) => (
          <Charactershow key={char.char_id} char= {char}></Charactershow>
      ))}
    
  </section>
}

export default Charactergrid;