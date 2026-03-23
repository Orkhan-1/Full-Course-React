import Greeting from "./Greeting";
import StateExample from "./StateExample";

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Greeting name="Orkhan" />
      <Greeting name="Alice" />
      <StateExample />
    </div>
  );
}

export default App;