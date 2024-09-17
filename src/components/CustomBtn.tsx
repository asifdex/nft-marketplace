import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomBtn = ({text,type,handelClick,otherCss,icon}:CustomButtonProps) => {
  return (
    <button type={type} onClick={handelClick} className={`flex items-center gap-2 rounded-full text-base  ${otherCss}`}>
      {text} {icon}
    </button>
  )
}

export default CustomBtn
