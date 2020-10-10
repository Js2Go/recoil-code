import React from 'react'
import { useRecoilValue } from 'recoil'
import { nameState } from '../store'

const SomeOtherComponentWithName = () => {
  const name = useRecoilValue(nameState)
  return <div>{name}</div>
}

export default SomeOtherComponentWithName
