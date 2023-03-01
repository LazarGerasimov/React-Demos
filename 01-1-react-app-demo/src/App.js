import './App.css';
import Link from './components/Link';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Paragraph />
        <Link />
      </header>
    </div>
  );
}

export default App;
