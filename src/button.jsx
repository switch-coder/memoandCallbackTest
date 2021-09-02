
import React, { memo } from 'react'

const Button  = ({n,className, onClick}) => {
    console.log('n render :>> ', n );
    return <button id={n} className={className} onClick={onClick} >{n}</button>
}

export default memo(Button);