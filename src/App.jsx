import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function fetchJoke() {
    setLoading(true)
    setError(null)
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke)
        setLoading(false)
      })
      .catch((err) => {
        setError('Failed to fetch a joke. Please try again.')
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} error={error} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
