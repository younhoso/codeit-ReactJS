import ReviewList from "./components/ReviewList";
import items from "./mock.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ReviewList items={items} />
    </div>
  );
}

export default App;
