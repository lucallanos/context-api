import "./App.css";
// COMPONENTS
import Navigation from "./components/Navigation/Navigation";
import ItemList from "./components/ItemList/ItemList";
// CONTEXT
import { ItemsProvider } from "./ItemsContext";

function App() {
  return (
    <ItemsProvider>
      <div className="App">
        <Navigation />
        <ItemList />
      </div>
    </ItemsProvider>
  );
}

export default App;
