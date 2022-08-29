import Nav from "./Nav";
import {useState} from "react";
let cc = console.log

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
    const [expenseNameState, setExpenseNameState] = useState("Rent");
    const [expenseCostState, setExpenseCostState] = useState(600);


    return(
        <div>
            <form id="expenseForm">
                <li className='navBarLiA'>
                    <span>Name of Expense</span><br/>
                    <input type="text" value={expenseNameState} id="expenseName"
                           onChange={(e) => setExpenseNameState(e.target.value)} /><br/><br/>
                    <span>Cost of Expense</span><br/>
                    <input type="number" value={expenseCostState} id="expenseCost"
                    onChange={(e) => setExpenseCostState(e.target.value) } /><br/><br/>
                    <input type="button" value='submit' id="expenseInput" onClick={(e) => {
                        handlesOnClick(expenseNameState, expenseCostState)}} />
                </li>
            </form>
        </div>
    )
}

function handlesOnClick(expenseNameState, costOfExpense){

ExpenseNamedItem(expenseNameState)
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
                    <ExpenseNamedItem/>
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
 function ExpenseNamedItem(expenseNameState){
let namedExpense = expenseNameState;
    cc(namedExpense);
    cc(typeof namedExpense);
    return(
         <li>
             {namedExpense}
         </li>

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