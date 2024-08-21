import React from 'react'

function Notesitem(props) {
    const {note} = props;
  return (
    <div className='col-md-3'>
      <div className="card my-2">
  <div className="card-body">
    <div className="d-flex justify-content-between align-items-center">
    <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-pen-to-square" style={{"color": "#74C0FC"}}> Edit</i>
    </div>
    <p className="card-text">{note.discription} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint odit deleniti aliquam, perspiciatis, minus iste magni incidunt vel quos nam omnis modi aliquid vitae ipsam ex. Aperiam sint iusto aspernatur voluptatem amet.</p>
    <div className="d-flex justify-content-between align-items-center">
    <i className="fa-solid fa-trash" style={{"color": "#74C0FC"}}></i>
    <button type="button" className="btn btn-info">Tag</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Notesitem
