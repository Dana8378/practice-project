import './App.css'
import { Button } from './components/UI/Button'
import { Input } from './components/UI/Input/Input'

function App() {

  return (
    <div>
      <div>
        <Button>Текст</Button>
        <Button disabled>Не активна</Button>
      </div>
      <div>
        <Input></Input>
        <Input disabled></Input>
      </div>
    </div>
  )
}

export default App
