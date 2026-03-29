import React, { useState } from "react";
import './App.css';
import styles from './Title.module.css';

function StylingTutorial() {
  const [color, setColor] = useState("red");

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2 style={{ color }}>Inline Style</h2>

      <h2 className="title">Plain CSS</h2>

      <h2 className={styles.title}>CSS Module</h2>

      <h2 className="text-3xl font-bold text-blue-500">
        Tailwind CSS
      </h2>

      <button
        onClick={() => setColor(color === "red" ? "purple" : "red")}
      >
        Change Inline Color
      </button>
    </div>
  );
}

export default StylingTutorial;