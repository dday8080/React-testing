import Nav from "./Nav";
import {useState} from "react";
let cc = console.log

let nextId = 0;

function Expenses(){
    const [expenseNameState, setExpenseNameState] = useState([""]);
    const [expenseCostState, setExpenseCostState] = useState([]);

    let InputHeading = (
        <h1 className="expenseTextBold">
            <span>Expenses</span><br/>
        </h1>
    );

    let ExpenseForm = (
        <div>
            <form id="expenseForm">
                <li className='navBarLiA'>
                    <span>Name of Expense</span><br/>
                    <input type="text" value={expenseNameState} id="expenseName"
                           onChange={(e) => {
                               setExpenseNameState(e.target.value)
                           }} /><br/><br/>
                    <span>Cost of Expense</span><br/>
                    <input type="number" value={expenseCostState} id="expenseCost"
                           onChange={(e) => setExpenseCostState(+e.target.value) } /><br/><br/>
                    <input type="button" value='submit' id="expenseInput"
                           onClick={(e) => {
                               setExpenseNameState([
                                   ...expenseNameState,
                                   {id: nextId++, name: expenseNameState}
                               ]);
                               setExpenseCostState([
                                   ...expenseCostState,
                                   {id: nextId++, name: expenseCostState}
                               ]);
                                handleStoringStates(setExpenseNameState,setExpenseCostState);}} />
                </li>
            </form>
        </div>
    );

    let expenseInputContainer = (
        <div className="expenseFlexboxInput">
            {InputHeading}
            {ExpenseForm}
            <button onClick={(e) => {
                cc(expenseNameState);
                cc(typeof(expenseNameState))
            }}>Log</button>
        </div>
    );

    let ExpenseOutput = (
        <div className="flexboxContainer">
            <div className="expenseFlexboxInput">
                <div className="expenseFlexboxOutputHeader" >
                    <h1 className="expenseTextBold">
                        <span>Name</span><br/>
                    </h1>
                </div>
                <div className="expenseFlexboxOutputItem">
                    <ExpenseNamedItem expenseNameState={expenseNameState}/>
                </div>
            </div>

            <div className="expenseFlexboxInput">
                <div className="expenseFlexboxOutputHeader" >
                    <h1 className="expenseTextBold">
                        <span>Cost</span>
                    </h1>
                </div>
                <div className="expenseFlexboxOutputItem">
                    <ExpenseOfItem expenseCostState={expenseCostState}/>
                    <span>More Stuff</span>
                </div>
            </div>
        </div>
    );



    return (
        <div className="App">
            <Nav />
            <h2 style={{color: "white"}}> Expenses </h2>
                <div className="flexboxContainer">
                    {expenseInputContainer}
                    {ExpenseOutput}
                </div>

        </div>
    );
}
function ExpenseOfItem({expenseCostState}) {
    cc(expenseCostState);
    return(
        <div>
            {expenseCostState}
        </div>
    )
}

function ExpenseNamedItem({expenseNameState}) {
    cc(expenseNameState)

    return (
        <div>
            {expenseNameState}
        </div>
    )
}
function handleStoringStates(setExpenseNameState, setExpenseCostState){


    // localStorage.setItem("Name", expenseNameState);
    // localStorage.setItem('Cost', expenseCostState);
    // cc(localStorage.getItem("Name"));
    // cc(localStorage.getItem("Cost"));
}



export default Expenses;