import React from "react";
import "./Viewport.css";

function Viewport({ children }: { children: React.ReactNode }) {
  return <section className="screen">{children}</section>;
}

export default Viewport;
