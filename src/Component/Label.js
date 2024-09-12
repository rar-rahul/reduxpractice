import React, { memo, useCallback, useContext, useMemo, useRef, useState } from 'react'

const Label = (props) => {
const name = useRef('');
const handleCHnage = useCallback((e) => {
    props.data(e.target.value)
},[])

console.log("child")
console.log(name.current)
    
  return (
    <div>
     <input type='text' ref={name} onChange={handleCHnage}/>
    </div>
  )
}

export default memo(Label)
