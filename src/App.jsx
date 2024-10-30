import "./scss/styles.scss";
// import './scss/App.scss'
import Header from "./components/header";
import Greeting from "./components/greeting";
import NameCard from "./components/nameCard";
import SkillSet from "./components/skillSet";
import Projects from "./components/Projects";
import Contact from "./components/contact";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Greeting></Greeting>
      <NameCard></NameCard>
      <SkillSet></SkillSet>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
