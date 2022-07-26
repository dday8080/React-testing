
import './App.css';

function MyButton() {
    return (
        <button> Touch me!!! </button>
    );
}
function Header() {
    return (
        <header>
            <span> <br/> Welcome to my new React Sampling!</span><br/><br/>
            <span> Welcome to the Danger Zone</span><br/>
        </header>
    );
}

function App() {
  return (

    <div className="App">
        <Header />
        <div>
            <MyButton />
        </div>
    </div>
    );

}


export default App;
