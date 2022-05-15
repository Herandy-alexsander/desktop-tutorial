import logo from '../logo.svg';
import '../App.css';
import {Button} from 'reactstrap';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Button color="danger">Danger!</Button>

            </header>
        </div>
    );
}

export default App;
