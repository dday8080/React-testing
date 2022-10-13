import Nav from "./Nav";
import {useEffect, useState} from "react";
let cc = console.log

let named  = 0;
let priced = 0;


function Expenses(){
    const [expenseNameInput, setExpenseNameInput] = useState("");
    const [expenseCostInput, setExpenseCostInput] = useState('');
    const [savedExpensesByName, setSavedExpensesByName] = useState([]);
    const [savedExpensesByCost, setSavedExpensesByCost] = useState([]);

    useEffect(() => {
        localStorage.setItem("savedExpensesByName", JSON.stringify(savedExpensesByName));
    }, [savedExpensesByName]);
    useEffect(() => {
        localStorage.setItem('savedExpensesByCost', JSON.stringify(savedExpensesByCost));
    }, [savedExpensesByCost]);

    useEffect(() => {
        const savedExpensesByName = JSON.parse(localStorage.getItem('savedExpensesByName'));
        if (savedExpensesByName) {
            setSavedExpensesByName(savedExpensesByName);
        }
    },[]);
    useEffect(() => {
        const savedExpensesByCost = JSON.parse(localStorage.getItem('savedExpensesByCost'));
        if (savedExpensesByCost) {
            setSavedExpensesByCost(savedExpensesByCost);
        }
    },[]);

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
                        handleSubmitExpense();
                    }}>Submit
                    </button>
                </li>
            </form>
        </div>
    );

    function handleSubmitExpense(){
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

    }


    // function handleStoringStates() {
    //     useEffect(() => {
    //         localStorage.setItem("savedExpensesByName", JSON.stringify(savedExpensesByName));
    //     }, [savedExpensesByName]);
    //     useEffect(() => {
    //         localStorage.setItem('savedExpensesByCost', JSON.stringify(savedExpensesByCost));
    //     }, [savedExpensesByCost]);
    //     cc(localStorage.getItem(setSavedExpensesByCost));

    // }

    // function restoreData(){
    //     setSavedExpensesByName = localStorage.getItem('Name');
    //     setSavedExpensesByCost = localStorage.getItem('Cost');
    // }

    let expenseInputContainer = (
        <div className="expenseFlexboxInput">
            {InputHeading}
            {ExpenseForm}

            {/*<button onClick={(e) => {*/}
            {/*    restoreData();*/}
            {/*}}>Load Saved </button>*/}
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

    let runningTotal = 0;

    for (let i = 0; i < savedExpensesByCost.length; i++) {
        runningTotal += savedExpensesByCost[i].cost;
    }

    return(
        <div>
            {runningTotal}
        </div>
    )
}



// function ExpensesAdded({savedExpensesByCost}){
//     cc(savedExpensesByCost);
//
//
//     let totalExpenses = () => {
//         cc(savedExpensesByCost);
//
//         savedExpensesByCost.map((value, key) => {
//             let total;
//             cc(value);
//             for (let i = value.cost; i < value.length; i++){
//                 total += value[i]
//                 ;
//
//             }
//             return  (
//                 <li className='expenseOutputLi' key={key}>
//                     {savedExpensesByCost.reduce((total, value) => total + value, 0)} </li>
//             )})
//     }
//     return(
//         <div>
//             {totalExpenses()}
//         </div>
//     )}
    // for (let entry in savedExpensesByCost) cc(entry);
    // for (let entry in savedExpensesByCost[0]) cc(entry);

    //  function ExpensesAdded({savedExpensesByCost}){
   //      let runningTotal = 0;
   //      for (let entry of savedExpensesByCost) runningTotal += +entry.cost;
   //
   //      return(
   //          <div>
   //              {runningTotal}
   //          </div>
   //      )
   //  }


// localStorage.setItem("Name", expenseNameState);
// localStorage.setItem('Cost', expenseCostState);
// cc(localStorage.getItem("Name"));
// cc(localStorage.getItem("Cost"));






export default Expenses;