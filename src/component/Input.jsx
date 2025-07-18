import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {

    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-2 pl-1'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={` px-3 py-2 rounded-lg bg-amber-100 text-gray-800 outline-none focus:bg-gray-100 duration-200 border border-gray-300 w-full ${className}`}
            ref={ref}
            id={id}
            {...props}
            />
        </div>
    )
})

export default Input