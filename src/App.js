import React from 'react'
import {
  RecoilRoot
} from 'recoil'
import CharacterCounter from './CharacterCounter'
import CurrentUserInfo from './components/CurrentUserInfo'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
    // logErrorToMyService(error, info)
    console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CurrentUserInfo />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  )
}

export default App
