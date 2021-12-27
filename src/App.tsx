import './App.css'

type appProps = {
  message?: string
}

const App = ({ message = 'Hello' }: appProps) => {
  return <div className='App'>{message}</div>
}

export default App
