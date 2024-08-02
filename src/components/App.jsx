import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((obj) => {
          return (
            <Emoji
              key={obj.id}
              name={obj.name}
              emoji={obj.emoji}
              description={obj.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}
