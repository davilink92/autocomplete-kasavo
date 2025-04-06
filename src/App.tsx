import "./App.css";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import { fetchSuggestions } from "./services/fetchSuggestion";

function App() {
  return (
    <>
      <div className="card">
        <Autocomplete
          onSearch={fetchSuggestions}
          onSelect={(item) => console.log(item)}
        />
      </div>
    </>
  );
}

export default App;
