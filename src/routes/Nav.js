// Nav.JS

import {Link} from "react-router-dom";
import "../App.css"

function Header() {
    return (
        <header className="App">
            <img
                src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__480.jpg"
                height={50}
                width={1900}
                alt="neat logo"
            />
            <span> <br/> Welcome To My React Apps </span><br/>
            <NavBarUl />
        </header>
    );
}

function NavBarLi(){
    return(
        <li className="navBarLiA">
            <Link to="/" className="linkStyle" >Home |</Link>
            <Link to="/Income" className="linkStyle" >Income |</Link>
            <Link to="/Expenses" className="linkStyle" >Expenses |</Link>
            <Link to="/Food" className="linkStyle" >Food |</Link>

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

        </div>
    );
}

export default Nav