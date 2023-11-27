import logo from './logo.svg';
import './App.scss';
import MyComponent from "./Example/MyComponent";

/**
 * 2 loại components: class component / function component (function, arrow)
 * nếu 1 hàm return 1 đóng html là component
 */

const App = () => {
// function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    wellcome khang with to react
                </p>
                <MyComponent/>
            </header>
        </div>
    );
}

export default App;
