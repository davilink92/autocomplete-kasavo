import { useState, useEffect, useRef, useCallback } from "react";
import { Suggestion } from "../types";
import { debounce } from "../../../utils/debounce";

interface UseAutoCompleteProps {
  onSearch: (query: string) => Promise<Suggestion[]>;
  debounceMs?: number;
  showSuggestionsOnFocus?: boolean;
}

export const useAutoComplete = ({
  onSearch,
  debounceMs = 300,
  showSuggestionsOnFocus = true,
}: UseAutoCompleteProps) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (!query.trim()) {
        setSuggestions([]);
        setIsOpen(false);
        return;
      }
      setIsLoading(true);
      const results = await onSearch(query);
      setSuggestions(results);
      setIsOpen(true);
      setIsLoading(false);
    }, debounceMs),
    []
  );

  const handleChange = (value: string) => {
    setInputValue(value);
    debouncedSearch(value);
  };

  const handleFocus = () => {
    if (showSuggestionsOnFocus && inputValue.trim()) {
      setIsOpen(true);
    }
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return {
    inputValue,
    setInputValue,
    suggestions,
    isOpen,
    isLoading,
    handleChange,
    handleFocus,
    containerRef,
    setIsOpen,
  };
};
