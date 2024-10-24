import React from 'react'

const Button = ({children , ...props}) => {
  return (
    <button className="px-4 py-2 font-bold text-xs md:text-base rounded-md bg-violet-500 text-yellow-300 hover:bg-violet-600 hover:text-yellow-400  " {...props}>
    {children}
</button>
  )
}

export default Button
