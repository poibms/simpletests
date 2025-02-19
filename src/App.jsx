import "./App.css";
import Counter from "./components/Counter/Counter.jsx";
import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Greeting name={"Pavel"} />
      <Counter />
      <UserProfile userId={4} />
    </>
  );
}

export default App;
