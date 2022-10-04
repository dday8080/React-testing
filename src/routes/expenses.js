import Nav from "./Nav";
import {useState} from "react";
let cc = console.log

let named  = 0;
let priced = 0;
let gTotal = 0;
function Expenses(){
    const [expenseNameInput, setExpenseNameInput] = useState("");
    const [expenseCostInput, setExpenseCostInput] = useState('');
    const [savedExpensesByName, setSavedExpensesByName] = useState(['']);
    const [savedExpensesByCost, setSavedExpensesByCost] = useState([]);
    const [totalExpensesByCost, setTotalExpensesByCost] = useState(['']);

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
                    <input type="text"
                           value={expenseNameInput} id="expenseName"
                           onChange={(e) => {setExpenseNameInput(e.target.value)}} /><br/>
                        <br/>
                    <span>Cost of Expense</span><br/>
                    <input type="number"
                           value={expenseCostInput} id="expenseCost"
                           onChange={(e) => {setExpenseCostInput(+e.target.value)}} /><br/>
                        <br/>
                    <button onClick={(e) => {
                        e.preventDefault();
                            setExpenseNameInput('');
                                setSavedExpensesByName([
                                    ...savedExpensesByName,
                                    { id: named++, name: expenseNameInput}
                                ]);
                            setExpenseCostInput('');
                                setSavedExpensesByCost([
                                    ...savedExpensesByCost,
                                    { id: priced++, cost: +expenseCostInput}
                           ]);
                                //
                                // setTotalExpensesByCost([
                                //         ...totalExpensesByCost,
                                //     { id: gTotal++, expense: +expenseCostInput }
                                // ])
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
                    <ExpenseNamedItem expenseNameInput={expenseNameInput} savedExpensesByName={savedExpensesByName}/>
                </div>
            </div>

            <div className="expenseFlexboxInput">
                <div className="expenseFlexboxOutputHeader" >
                    <h1 className="expenseTextBold">
                        <span>Cost</span>
                    </h1>
                </div>
                <div className="expenseFlexboxOutputItem">
                    <ExpenseOfItem expenseCostInput={expenseCostInput} savedExpensesByCost={savedExpensesByCost}/>
                    {<span>Total Expenses <ExpensesAdded savedExpensesByCost={savedExpensesByCost}/>  <br/></span>}
                </div>
            </div>
        </div>
    );

    // localStorage.setItem("Name", expenseNameState);
    // localStorage.setItem('Cost', expenseCostState);
    // cc(localStorage.getItem("Name"));
    // cc(localStorage.getItem("Cost"));




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
function ExpenseOfItem({savedExpensesByCost, expenseCostInput}) {

    if (savedExpensesByCost.length === undefined) return;

    //if (savedExpensesByCost.length)

    let expenseByCost = savedExpensesByCost.map((entry, key) => {
        return (
            <li className="expenseOutputLi" key={key}> {entry.cost}</li>
        );
    });
    return(
        <div>
            {expenseCostInput}
            {expenseByCost}
        </div>
    )
}

function ExpenseNamedItem({savedExpensesByName, expenseNameInput}) {

    let expensesByName = savedExpensesByName.map((entry, key) => {
        return (
            <li className='expenseOutputLi' key={key}> {entry.name}</li> /*alternatively, use key={entry.id} */
        );
    });

    return (
        <div>
            {expenseNameInput}
            {expensesByName}
        </div>
    )
}
function ExpensesAdded({savedExpensesByCost}){
    let totals = [];
    let runningTotal = 0;

    for (let i = 0; i < savedExpensesByCost.length; i++) {
        cc(savedExpensesByCost[i].cost)
        runningTotal += savedExpensesByCost[i].cost;
        totals.push(runningTotal);
    }

    totals.map((value, key) => {
        return (
            <li className='expenseOutputLi' key={key}>
                hello
            </li>
        )}
    );


    return(
        <div>
            {totals}
        </div>
    )
}




// function handleStoringStates(expenseNameInput, expenseCostInput, setSavedExpensesByName, setSavedExpensesByCost){
//     expenseNameInput('')
//         setSavedExpensesByName([
//             ...savedExpensesByName,
//             {name: expenseNamestate}
//         ]);
//
//     cc(expenseNameInput, expenseCostInput);
//
//
//     // localStorage.setItem("Name", expenseNameState);
//     // localStorage.setItem('Cost', expenseCostState);
//     // cc(localStorage.getItem("Name"));
//     // cc(localStorage.getItem("Cost"));
// }



export default Expenses;