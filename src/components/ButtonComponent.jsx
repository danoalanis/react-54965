import React from 'react'
const ButtonComponent = ({label, handleClick, customStyles, object}) => {
  return (
    <button style={customStyles} onClick={handleClick}>{label}</button>
  )
}

export default ButtonComponent