import React from "react";
import "./row.css";
import Box from "./Box";
function Row({ odd }) {
  let even = odd.odd ? 0 : 1;
  return (
    <div className="row">
      {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
        return <Box bgColor={even++ % 2} />;
      })}
    </div>
  );
}

export default Row;
