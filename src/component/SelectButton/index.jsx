import React from 'react'
import './style.css'

function SelectButton(props) {
    const options = props.options
  return (
    <div className='Btn__Container'>
        {options.map((i)=>(<div className='btn'>{i}</div>))}
    </div>
  )
}

export default SelectButton