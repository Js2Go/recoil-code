import React from 'react'
import { useSetRecoilState } from 'recoil'
import { nameState } from '../store'

const SomeOtherComponentThatSetName = () => {
  const setName = useSetRecoilState(nameState)
  return <button onClick={() => setName('mazi')}>Set Name</button>
}

export default SomeOtherComponentThatSetName
