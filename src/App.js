import React, { useState } from "react";

function App() {
  const [color, setcolor] = useState("#9EB9D4");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: 100,
          color: "white",
          // textShadow: "10px 10px 10px #00001",
          padding: "13%",
        }}
      >
        Bgchanger
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button
            onClick={() => setcolor("#5D89BA")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#5D89BA" }}
          >
            S-LBlue
          </button>
          <button
            onClick={() => setcolor("#8D80AD")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#8D80AD" }}
          >
            Violet
          </button>
          <button
            onClick={() => setcolor("#FBCEB1")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FBCEB1" }}
          >
            Apricot
          </button>
          <button
            onClick={() => setcolor("#708090")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#708090" }}
          >
            Grey
          </button>
          <button
            onClick={() => setcolor("#FFE5B4")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFE5B4" }}
          >
            Pench
          </button>
          <button
            onClick={() => setcolor("#FFC0CB")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFC0CB" }}
          >
            Pink
          </button>
          <button
            onClick={() => setcolor("#008080")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#008080" }}
          >
            Teal
          </button>
          <button
            onClick={() => setcolor("#003153")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#003153" }}
          >
            P-Blue
          </button>
          <button
            onClick={() => setcolor("#43B3AE")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#43B3AE" }}
          >
            Verdigris
          </button>
          <button
            onClick={() => setcolor("#faebd7")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#faebd7" }}
          >
            Antique
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
