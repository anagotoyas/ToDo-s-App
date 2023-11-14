
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Cortar tomate", completed: true },
//   { text: "Cortar lechuga", completed: false },
//   { text: "Cortar carne", completed: false },
//   { text: "Cortar pollo", completed: false },
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))

function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
 
}

export default App;
