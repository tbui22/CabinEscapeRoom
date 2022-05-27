import React, { useEffect } from "react";
import "./Sidebar.css";

function Sidebar(props) {
  const { sidebar, text } = props

  useEffect(() => {
    var objDiv = document.getElementById("sideb");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [text])


  return (
    <nav className="card" style={{ width: "18em", height: "90vh", fontSize: "1.5em", overflow: "scroll" }} id="sideb">

      <ul className="m-3">
        {text.map((item, i) => <li className="m-3" key={i}>{item}</li>)}
      </ul>

    </nav>
  );
}

export default Sidebar;