import {Link} from "react-router-dom";

import "../App.css"
import Expenses from "./expenses";




function Header() {
    return (
        <header className="App">
            <img
                src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__480.jpg"
                height={50}
                width={1900}
                alt="neat logo"
            />
            <span> <br/> Welcome to my new React Sampling!</span><br/><br/>
            {/*<span> Welcome to the Danger Zone</span><br/>*/}
        </header>
    );
}

function NavBarLi(){
    return(
        <li className="navBarLiA">
            <Link to="/" className="linkStyle" > Home </Link>
            <Link to="Expenses" className="linkStyle" >Expenses</Link>

        </li>
    )

}

function NavBarUl(){
    return(
        <div>
            <ul className="navBarUl">
                <NavBarLi />

            </ul>
        </div>
    )
}
function Nav (){

    return(
        <div>
            <Header />
            <NavBarUl />
        </div>
    );
}

export default Nav