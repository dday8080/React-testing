// import {Outlet, link} from "react-router-dom";

import "../App.css"


export function Header() {
    return (
        <header>
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

const navName = {
    Project1: "home",
    a:"",

};

function NavBarLi(){
    // return(
    //     <li
    //         className="navBarLiA">
    //         <link to="src/app.js"> {navName.Project1} </link> {" "}
    //
    //
    //     </li>
    // )

    return(
    <li><a
            href={navName.a}
            target="self"
            className='navBarLiA'>
            {navName.Project1}
        </a>
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

export default function Nav (){
    return(
        <div>
            {/*<Nav>*/}
                <Header />
                <NavBarUl />
            {/*</Nav>*/}
            {/*<Outlet />*/}
        </div>

    )

}