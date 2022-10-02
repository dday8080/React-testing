import Nav from "./Nav";
import {useState} from "react";
let cc = console.log

let nextId = 0;

function Expenses(){
    const [expenseNameInput, setExpenseNameInput] = useState("");
    const [expenseCostInput, setExpenseCostInput] = useState(0);
    const [savedExpensesByName, setSavedExpensesByName] = useState([]);
    const [savedExpensesByCost, setSavedExpensesByCost] = useState([]);

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
                    <input type="text" value={expenseNameInput} id="expenseName"
                           onChange={(e) => {
                               setExpenseNameInput(e.target.value)
                           }} /><br/><br/>
                    <span>Cost of Expense</span><br/>
                    <input type="number" value={expenseCostInput} id="expenseCost"
                           onChange={(e) => setExpenseCostInput(+e.target.value) } /><br/><br/>
                    <button onClick={(e) => {
                        e.preventDefault();
                        handleStoringStates(expenseNameInput, expenseCostInput, setSavedExpensesByName, setSavedExpensesByCost);
                    }}>Submit</button>
                </li>
            </form>
        </div>
    );

    let expenseInputContainer = (
        <div className="expenseFlexboxInput">
            {InputHeading}
            {ExpenseForm}
            <button onClick={(e) => {
                cc(expenseNameInput);
                cc(typeof(expenseNameInput))
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
                    <ExpenseNamedItem expenseNameState={expenseNameInput}/>
                </div>
            </div>

            <div className="expenseFlexboxInput">
                <div className="expenseFlexboxOutputHeader" >
                    <h1 className="expenseTextBold">
                        <span>Cost</span>
                    </h1>
                </div>
                <div className="expenseFlexboxOutputItem">
                    <ExpenseOfItem expenseCostState={expenseCostInput}/>
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
function handleStoringStates(expenseNameInput, expenseCostInput, setSavedExpensesByName, setSavedExpensesByCost){

    // setSavedExpensesByName = setData([expenseNameInput]);
    // setSavedExpensesByCost = setData([expenseCostInput]);
    cc(expenseNameInput, expenseCostInput);


    // localStorage.setItem("Name", expenseNameState);
    // localStorage.setItem('Cost', expenseCostState);
    // cc(localStorage.getItem("Name"));
    // cc(localStorage.getItem("Cost"));
}



export default Expenses;