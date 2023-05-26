import React, { forwardRef, useImperativeHandle, useState } from 'react'
import './style.css'

const SelectButton =  forwardRef((props,_ref) => {
    const options = props.options
    const [Option, setOption] = useState(0);

    useImperativeHandle(
      _ref,
      () => ({
        getOptionSelected : () => {
          return Number(Option);
        },
      })
    );
    const handleClick = (e) => setOption(e.currentTarget.id);

  return (
    <div className='Btn__Container'>
        {options.map((i,k)=>(<div onClick={handleClick} id={k} className={k==Option?"btn-active":"btn"}>{i}</div>))}
    </div>
  )
});

export default React.memo(SelectButton);