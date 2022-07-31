import "./App.css"

const navName = {
    Project1: "Wage Calculator",
        a:"wageCalculator.html",
   };

function NavBarLi(){

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
                <NavBarLi />
                <NavBarLi />
            </ul>
        </div>
    )
}

export default function Nav (){
    return(
        <div>
            <NavBarUl />
        </div>

    )

}