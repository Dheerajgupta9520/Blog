import { useId } from "react"
import React from 'react'

function Select({
    options,
    label,
    className='',
    ...props

},ref) 
{
    const id =useId()
  return (
    <div className="w-full">
        {label && <label
        htmlFor={id}
        className=""
        >
            </label>}
            <select name="" id={id} {...props} ref={ref}
            className={` px-3 py-2 rounded-lg bg-amber-100 text-gray-800 outline-none focus:bg-gray-100 duration-200 border border-gray-300 w-full ${className}`}
            >
                {options?.map((option)=>(
                    <option
                    key={option} value={option}
                    >{option}</option>
                ))}
            </select>
    </div>
  )
}

export default React.forwardRef(Select)