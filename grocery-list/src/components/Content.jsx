import { useState } from "react"

const Content = () => {
  const [name, setName] = useState('Dave')
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('alice-blue')

  function handleNameChange() {
    const names = ['Bob', 'Dave', 'Kevin']
    const int = Math.floor(Math.random() * 3)
    setName(names[int])
  }

  const handleCountChange = () => {
    setCount(count + 1)
  }

  const handleColorChange = () => {
    const colors = ['red', 'blue', 'green', 'yellow']
    const int = Math.floor(Math.random() * 4)
    setColor(colors[int])
  }

  return (
    <main>
      <p> Name : { name }</p>
      <p>Count : { count }</p>
      <p>Color: 
        <span style={
          {backgroundColor: color, width: "20px", height: "20px", display: "inline-block"}
        }></span>
      </p>
      <button onClick={handleNameChange}>
        Change Name
      </button>
      <button onClick={handleCountChange}>
        Change Count
      </button>
      <button onClick={handleColorChange}>
        Change Color
      </button>
    </main>
  )
}

export default Content
