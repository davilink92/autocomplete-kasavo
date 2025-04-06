import "./App.css";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import { fetchSuggestions } from "./services/fetchSuggestion";

function App() {
  return (
    <>
      <div className="card">
        <h2 style={{ textAlign: "left" }}>Search Neighbourhood</h2>
        <Autocomplete
          onSearch={fetchSuggestions}
          onSelect={(item) => console.log(item)}
          showSuggestionsOnFocus
        />
      </div>
    </>
  );
}

export default App;
