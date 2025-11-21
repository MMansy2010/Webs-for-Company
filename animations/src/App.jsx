import './App.css'

function App() {
  const box = (props) =>{
    return <div className="box">{props.news}</div>
  }
  return (
    <>
      <div>
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="Company Logo" className="logo" width = "50" />
          <h3>Company News</h3>
    </header>
        <h1>News</h1>
      </div>
        {box({news: "Breaaking News: React 18 Released!"})}
        {box({news: "Weather Update: Sunny Skies Ahead!"})}
        {box({news: "Sports: Local Team Wins Championship!"})}
        {box({news: "Tech: New Smartphone Model Launched!"})}
        {box({news: "Health: Tips for a Balanced Diet!"})}
        {box({news: "Travel: Top Destinations for 2024!"})}
    </>
  )
}

export default App
