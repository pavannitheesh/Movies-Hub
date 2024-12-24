import React from 'react'

const Modal = ({visible,onClose}) => {
 
  return (
            visible && <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose} >
<div className="bg-white p-2 rounded w-72">
    <h1 className="font-semibold text-center text-xl text-gray-700">
    Welcome back
    
    </h1>
    
</div>
</div>
  )
}

export default Modal