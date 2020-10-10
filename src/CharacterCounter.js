import React from 'react'
import NameInput from './components/NameInput'
import SomeOtherComponentWithName from './components/SomeOtherComponentWithName'
import SomeOtherComponentThatSetName from './components/SomeOtherComponentThatSetName'
import NameLength from './components/NameLength'

const CharacterCounter = () => {
  return <>
    <NameInput />
    <SomeOtherComponentWithName />
    <SomeOtherComponentThatSetName />
    <NameLength />
  </>
}

export default CharacterCounter
