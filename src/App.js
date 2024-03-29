import "./App.css";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Body from "./components/Body";

function App(props) {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Body template={props.template} />
    </div>
  );
}

export default App;
