import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import RightPanel from "./components/RightPanel";

function App(props) {
  const [template, setTemplate] = useState(props.template);
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <RightPanel template={template} />
    </div>
  );
}

export default App;
