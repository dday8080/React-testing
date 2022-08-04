import Nav from "./Nav";

function ExpenseFlexBox(){

    return(
        <div className="flexboxContainer">
            <ExpenseInputContainer/>
            <ExpenseOutput/>
        </div>
    )
}

function  ExpenseInputContainer(){

    return(
        <div className="expenseFlexboxInput">
            <InputHeading/>
            <ExpenseForm />
        </div>
    )
}

function InputHeading(){

    return(
        <h1 className="expenseTextBold">
            <span>Expenses</span><br/>
        </h1>
    )
}

function ExpenseForm(){

    return(
        <div>
            <form>
                <li className='navBarLiA'>
                    <span>Name of expense</span><br/>
                    <input type="text" defaultValue="Rent" /><br/><br/>
                    <span>Cost of Expense</span><br/>
                    <input type="number" defaultValue="600" /><br/><br/>
                    <button>Next Inquire</button><br/>
                    <button>submit</button>
                </li>
            </form>
        </div>
    )
}

function ExpenseOutput(){

    return(
        <div className="flexboxContainer">
            <div className="expenseFlexboxOutputHeader" >
                <OutputCost />
                <div className="expenseFlexboxInput">
                    <span> some stuff</span>
                </div>
            </div>
            <div className="expenseFlexboxOutputHeader">
                <h1 className="expenseTextBold" > Cost</h1>
            </div>
        </div>
    )
}

function OutputCost (){

    return(
        <h1 className="expenseTextBold">
            Name <br/>
        </h1>
    )
}


export default function Expenses (){

    return(
        <div className="App">
            <Nav />
            <h2 style={{color: "white"}}> Expenses </h2>
            <ExpenseFlexBox />

        </div>
    )
}