import React, { ReactNode } from 'react'

interface Prop{
    children: ReactNode;
    buttonColor: string;
}

const Button = ({children, buttonColor}: Prop) => {
  return (
    <div className={'btn ' + buttonColor}>{children}</div>
  )
}

export default Button