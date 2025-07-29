import React from 'react'
import Button from "../../Componenets/Button.js"
import MovieForm from './MovieForm.js';
import { useState } from 'react';
const MovisList = () => {
    const [showMovieFormModal, setShowMovieFormModal]= useState(false)
  return (
    <div>
 <div className='flex justify-end mb-1'>
 <Button title="Add Movie" variant="outlined" onClick={()=>{
    setShowMovieFormModal(true);
 }}/>
 </div>
 {showMovieFormModal && (
    <MovieForm
    showMovieFormModal={showMovieFormModal}
    setShowMovieFormModal={setShowMovieFormModal}
    formType="add"
    
    
    />
 )}


    </div>
   
  )
}

export default MovisList