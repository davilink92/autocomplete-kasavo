import React from "react";

export function highlightMatch(text: string, input: string): React.ReactNode {
  const index = text.toLowerCase().indexOf(input.toLowerCase());
  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + input.length);
  const after = text.slice(index + input.length);

  return (
    <>
      {before}
      <span style={{ color: "#ffcc00" }}>{match}</span>
      {after}
    </>
  );
}
