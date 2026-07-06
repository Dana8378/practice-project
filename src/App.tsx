import './App.css'
import { useState } from 'react';
import { Button } from './components/UI/Button'
import { Input } from './components/UI/Input/Input'
import { CheckBox } from './components/UI/CheckBox'
import { Card } from './components/UI/Card';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div>
        <Button>Текст</Button>
        <Button disabled>Не активна</Button>
      </div>
      
      <div>
        <Input 
          value={inputValue} 
          onChange={setInputValue}
        />
        <Input disabled/>
      </div>

      <div>
        <CheckBox 
          label='click'
          checked={isChecked}
          onChange={setIsChecked}
        />
      </div>

      <div>
        <Card 
          title="Заголовок"
          description='Это описание карточки'
        >
              <Button>Кнопка</Button>
              <Button>Длинная кнопка</Button>
        </Card>
      </div>
    </div>
  )
}

export default App
