import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  function addToFive(num){
    alert(num +5)
  }

  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <h3>React core concenpt 2</h3>
      <button onClick={handleClick}>Click me</button>
      {/* vejailla */}
      <button onClick={()=>addToFive(3)}>Peramiter function btn</button>
    </>
  )
}

export default App
