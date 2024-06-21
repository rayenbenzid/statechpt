import React, { useState } from 'react'

const Modal = ({setshow,el}) => {
     const [edit, setedit] = useState("age:")
    const [showbutton, setshowbutton] = useState(true)
  return (
    <div className='modal'>

        <div className="box_modal">
            <button onClick={()=>setshow(false)}>X</button>
            <h1>{edit}</h1>

            <h2>{el.price}</h2>
        </div>
    </div>
  )
}

export default Modal

