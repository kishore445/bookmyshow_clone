import React from 'react'

const Button = (title, onClick, variant, disabled, fullwidth, type) => {
  return (
    // let className=""
    <Button type={type}onClick={onClick}disabled={disabled}>{title}</Button>
  )
}

export default Button