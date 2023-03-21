import React from "react";
const HiglightSpan: React.FC<{ value: string; higlight: string }> = (props) => {
  return <span>{getHighlightedText(props.value, props.higlight)}</span>;
};

function getHighlightedText(text: string, higlight: string) {
  // Split text on higlight term, include term itself into parts, ignore case
  var parts = text.split(new RegExp(`(${higlight})`, "gi"));
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === higlight.toLowerCase() ? (
        <mark>{part}</mark>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}

export default HiglightSpan;
