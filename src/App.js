import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
     <Search defaultCity="New York" />
     <footer>
  This project was coded by {" "}<a href="https://github.com/vikchvk" target="_blank" rel="noreferrer" >Viktoriia Chvykova</a>
   {" "}and is{" "} <a 
href="hhttps://github.com/vikchvk/new-react-app"
 target="_blank" rel="noreferrer" > open-sourced on GitHub</a>
 </footer>
    </div>
  );
}
