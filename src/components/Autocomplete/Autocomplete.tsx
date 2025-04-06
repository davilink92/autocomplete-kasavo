import React, { ChangeEvent } from "react";
import styles from "./autocomplete.module.scss";
import { useAutoComplete } from "./hooks/useAutocomplete";
import { Suggestion } from "./types";
import { highlightMatch } from "../../utils/highlightMatch";

interface AutocompleteProps {
  onSearch: (query: string) => Promise<Suggestion[]>;
  onSelect: (item: Suggestion) => void;
  placeholder?: string;
  debounceMs?: number;
  showSuggestionsOnFocus?: boolean;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  onSearch,
  onSelect,
  placeholder = "Type to search",
  debounceMs = 300,
  showSuggestionsOnFocus = false,
}) => {
  const {
    inputValue,
    setInputValue,
    suggestions,
    isOpen,
    isLoading,
    handleChange,
    handleFocus,
    containerRef,
    setIsOpen,
  } = useAutoComplete({ onSearch, debounceMs, showSuggestionsOnFocus });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  const handleSelect = (item: Suggestion) => {
    setInputValue(item.text);
    setIsOpen(false);
    onSelect(item);
  };

  return (
    <div className={styles.autocompleteContainer} ref={containerRef}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
      />
      {isOpen && (
        <div className={styles.dropdown}>
          {isLoading ? (
            <div className={styles.loading}>Loading...</div>
          ) : suggestions.length > 0 ? (
            suggestions.map((s: Suggestion) => (
              <div
                key={s.id}
                className={styles.suggestion}
                onClick={() => handleSelect(s)}
              >
                {highlightMatch(s.text, inputValue)}
              </div>
            ))
          ) : (
            <div className={styles.noResults}>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
