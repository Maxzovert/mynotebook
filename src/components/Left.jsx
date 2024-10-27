import React from 'react'
import Button from './Button'

const Left = () => {
  return (
         <aside className="w-1/3 h-full px-8 py-16 mt-4 bg-lgrey text-black md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-black">YOur Notes</h2>
      <div>
           <Button>
            + Add Note
           </Button>
      </div>
       {/* <ul className="mt-8">
        {projects.map(project => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

          if(project.id === seletedPojectId){
            cssClasses += " bg-stone-800 text-stone-200" 
          }else{
            cssClasses += " text-stone-400"
          }

          return (<li key={project.id}>
          <button 
          onClick={() => onSelectProject(project.id)} 
          className={cssClasses}>
            {project.title}
            </button>
        </li>)
        }
      )}
      </ul> */}
    </aside>
  )
}

export default Left
