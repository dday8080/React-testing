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
                    <span>
                        Submit to compare<br/>
                        Income to Expenses<br/>
                    </span>
                    <button>submit</button>
                </li>
            </form>
        </div>
    )
}

function ExpenseOutput(){

    return(
        <div className="flexboxContainer">
            <div className="expenseFlexboxInput">
                <div className="expenseFlexboxOutputHeader" >
                  <h1 className="expenseTextBold">
                      <span>Name</span><br/>
                  </h1>
                </div>
                <div className="expenseFlexboxOutputItem">
                    <span> Some Stuff</span>
                    <span> Less Stuff</span>
                </div>
            </div>

            <div className="expenseFlexboxInput">
                <div className="expenseFlexboxOutputHeader" >
                    <h1 className="expenseTextBold">
                        <span>Cost</span>
                    </h1>
                </div>
                <div className="expenseFlexboxOutputItem">
                    <span> Some Stuff</span>
                    <span>More Stuff</span>
                </div>
            </div>
        </div>
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