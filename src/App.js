import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Date from './components/Date';
import Msic from './components/Msic';

<head>
<meta charset="utf-8" />
<link rel="icon" href="%PUBLIC_URL%/Ribbon.png" type="image/png" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>TO DO LIST OF A COQUETTE GIRLY</title>
</head>

function App() {
  return (
    <div className="App">
      <Msic />
      <Date/>
      <TodoWrapper  />
    </div>
  );
}

export default App;