import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomBtn = ({text,type,handelClick,otherCss}:CustomButtonProps) => {
  return (
    <button type={type} onClick={handelClick} className={`rounded-full text-base  ${otherCss}`}>
      {text}
    </button>
  )
}

export default CustomBtn
