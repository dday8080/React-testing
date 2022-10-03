import Nav from "./Nav";
import {useState} from "react";
let cc = console.log

let named = 0;
let priced =0;

function Expenses(){
    const [expenseNameInput, setExpenseNameInput] = useState("");
    const [expenseCostInput, setExpenseCostInput] = useState();
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
                            setExpenseCostInput();
                                setSavedExpensesByCost([
                                    ...savedExpensesByCost,
                                    { id: priced++, cost: +expenseCostInput}
                           ]);
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
                    <ExpenseNamedItem savedExpensesByName={savedExpensesByName}/>
                </div>
            </div>

            <div className="expenseFlexboxInput">
                <div className="expenseFlexboxOutputHeader" >
                    <h1 className="expenseTextBold">
                        <span>Cost</span>
                    </h1>
                </div>
                <div className="expenseFlexboxOutputItem">
                    <ExpenseOfItem savedExpensesByCost={savedExpensesByCost}/>
                </div>
            </div>
        </div>
    );
    // function handleStoringStates(expenseNameInput, expenseCostInput, setSavedExpensesByName, setSavedExpensesByCost, savedExpensesByName, savedExpensesByCost){
    //    return(
    //     setExpenseNameInput('')
    //         setSavedExpensesByName([
    //         ...savedExpensesByName,
    //             {name: expenseNameInput}
    //     ])
    //
    //     )
    //
    //     cc(expenseNameInput, expenseCostInput);
    //
    //
    //     // localStorage.setItem("Name", expenseNameState);
    //     // localStorage.setItem('Cost', expenseCostState);
    //     // cc(localStorage.getItem("Name"));
    //     // cc(localStorage.getItem("Cost"));
    // }



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
function ExpenseOfItem({savedExpensesByCost}) {
    cc(savedExpensesByCost);
    return(
        <div>
            {savedExpensesByCost.map(savedExpensesByCost => (
                <li className="expenseOutputLi" key={priced.id}> {savedExpensesByCost.cost}</li>
            ))}
        </div>
    )
}

function ExpenseNamedItem({savedExpensesByName}) {
    let expensesByName = savedExpensesByName.map((entry, key) => {
        <li className='expenseOutputLi' key={key}> {entry.name}</li> /*alternatively, use key={entry.id} */
    });

    return (
        <div>
            {expensesByName}
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