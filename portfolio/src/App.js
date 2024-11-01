import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./skills";
import { Contact } from "./Contact";
// {CodingProfilesDashboard} from "./Profile";
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