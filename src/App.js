import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./skills";
import { Contact } from "./Contact";
import {CodingProfilesDashboard} from "./Profile";
import {CertificateSection} from "./cert";
function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner/>
            <Skills/>
            <CodingProfilesDashboard/>

            <Contact/>
        </div>
    );
}

export default App;