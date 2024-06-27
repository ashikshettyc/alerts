import React from 'react'

function Alert(props) {
  const {colors,iconUrl,message} = props
  return (
    <div className={`flex w-1/3 h-3.5 px-5 py-8 items-center rounded-md  ${colors}`}>
        <img className='w-6 h-6 rounded-full mr-6' src={iconUrl} alt={"message"}/>
        <p className='text-white font-semibold text-sm font-serif'>{message}</p>        
    </div>
  )
}

export default Alert