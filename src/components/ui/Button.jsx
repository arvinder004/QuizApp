import React from 'react'

const Button = ({children, onClick, className, Disabled}) => {
  return (
    <button
        className={`${className} border rounded-md outline m-2 w-30 min-w-fit px-5 py-2`}
        onClick={onClick}
        disabled={Disabled}
    >
        {children}
    </button>
  )
}

export default Button