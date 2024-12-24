import './App.css'
import Button from './components/Button'

function App() {
  

  return (
    <Button 
    label= "logout"
    bg="green"
    handleClick={() => console.log("click")}/>
  )
}
export default App
