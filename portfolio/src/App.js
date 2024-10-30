import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/skills";
import { Contact } from "./components/Contact";
function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner/>
            <Skills/>
            <Contact/>

        </div>
    );
}

export default App;