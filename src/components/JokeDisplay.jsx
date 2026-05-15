const JokeDisplay = ({ joke, loading, error }) => {
  return (
    <div className="joke-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  )
}

export default JokeDisplay
