import React, { useState } from 'react'
import noNotes from "../Assets/Welcom-logo.png"
import Button from './Button'
 
const Blank = ({ShowNotescomp}) => {
 
  return (
    <div className="mt-2 text-center w-2/3">
    <img 
    src={noNotes} 
    alt="An Empty Task List"
    className="w-16 h-16 object-contain mx-auto"
    />
    <h2 className="text-xl font-bold text-stone-500 my-4">Add Your First note</h2>
    <p className="text-stone-400 mb-4">Select a note or get started with new one</p>
    <p className="mt-8">
    {/* <Button>Create New</Button> */}
    <Button onClick={ShowNotescomp}>Create New</Button>
    </p>
  </div>
  )
}

export default Blank
