import React from 'react'
import { useRecoilValue } from 'recoil'
import { lengthState } from '../store'

const NameLength = () => {
  const length = useRecoilValue(lengthState)
  return <>Name Length: {length}</>
}

export default NameLength
