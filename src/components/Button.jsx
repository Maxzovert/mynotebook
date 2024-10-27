import React from 'react'

const Button = ({children , ...props}) => {
  return (
    <button className="px-4 py-2 font-bold text-xs md:text-base rounded-md bg-orange text-white hover:text-black  " {...props}>
    {children}
</button>
  )
}

export default Button
