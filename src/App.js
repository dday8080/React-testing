
import {link} from "react-router-dom";
import './App.css';
import {useState} from "react";
import FilterableP from "./FilterableP";
import {Welcome} from "./FilterableP";
import {Avatar} from "./FilterableP";
import Nav from "./routes/Nav";

let cc = console.log




function MyButton({count, onClick}) {

    return (
        <button onClick={onClick}>
            Touched me {count} times
        </button>
    );
}



function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (

        <div className="App">

            <div>
                <nav>
                    {/*<link to="/">Expenses</link> |{" "}*/}
                    <Nav/>

                </nav>
                <br/>
                <Welcome />
                <Avatar/><br/><br/>
                <MyButton count={count} onClick={handleClick}/>
                <FilterableP/>
                {/*<Products />*/}
                {/*<MyButton count={count} onClick={handleClick} />*/}

            </div>
            {/*<Outlet/>*/}
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