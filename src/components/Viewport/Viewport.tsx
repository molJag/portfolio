import React from "react";
import "./Viewport.css";

function Viewport({ children, classes }: { children: React.ReactNode, classes?: string[] }) {
  return <section className={classes && classes.length > 0 ? `${classes.join(' ')} screen` : 'screen'}>{children}</section>;
}

export default Viewport;
