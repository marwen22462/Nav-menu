import React from "react";
import Navmenu from "./component/Navbar";
import "./App.css";

function App() {
  const navbar = [
    { item: "Home" },
    
    {
      item: "Services",
      subitem: [
        "For entrepreneurs",
        "For students",
        "For Hobbyists"
      ]
    },
    { item: "Contact" }
  ];
  
  return (
    <div className="App">
      <Navmenu nav={navbar} />
    </div>
  );
}

export default App;
