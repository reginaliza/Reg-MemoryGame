import Characters from "./components/Characters";
import Logo from "./logo";

export default function App() {
  return (
    <div className="App">
      <h1>
        <Logo src="logo.png" />
      </h1>
      <h2>
        SCORE: <span id="score">0 </span>
        <button onClick={again}>Try Again</button>
      </h2>
      <Characters />
    </div>
  );
}

function again() {
  window.location.reload();
}
