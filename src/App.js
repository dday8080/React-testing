
import './App.css';
import {useState} from "react";
import FilterableP from "./FilterableP";
import {Welcome} from "./FilterableP";
import {Avatar} from "./FilterableP";
import Nav from "./Nav";
let cc = console.log




function MyButton({count, onClick}) {

    return (
        <button onClick={onClick}>
            Touched me {count} times
        </button>
    );
}
function Header() {
    return (
        <header>
            <img
            src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__480.jpg"
            height={50}
            width={1900}
            alt="neat logo"
           />
            <span> <br/> Welcome to my new React Sampling!</span><br/><br/>
            <span> Welcome to the Danger Zone</span><br/>
        </header>
    );
}


function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (

        <div className="App">
            <Header/>
            <div>
                <Nav/>
                <br/>
                <Welcome />
                <Avatar/><br/><br/>
                <MyButton count={count} onClick={handleClick}/>
                <FilterableP/>
                {/*<Products />*/}
                {/*<MyButton count={count} onClick={handleClick} />*/}

            </div>
        </div>
    );

}




export default App;



// function Products () {
//     const produce = [
//         {title: 'Cabbage', isFruit: false, id: 1},
//         {title: 'Garlic', isFruit: false, id: 2},
//         {title: 'Apple', isFruit: true, id: 3},
//     ];
//     const listItems = produce.map(produce =>
//         <li
//             key={produce.id}
//             style={{
//                 color:produce.isFruit ? 'magenta' : 'darkgreen'
//             }}
//         >
//             {produce.title}
//         </li>
//     );
//     return(
//         <ul>{listItems}</ul>
//     );
// }