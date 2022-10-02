import Nav from "./Nav";
// import {getImageUrl} from "../FilterableP";
import {useState} from "react";



let cc = console.log

// let nextId = 0;

function Expenses(){
    const [expenseNameState, setExpenseNameState] = useState('');
    const [expenseCostState, setExpenseCostState] = useState();
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
                    <input type="text" value={expenseNameState} id="expenseName"
                           onChange={(e) => {
                               setExpenseNameState(e.target.value)
                           }} /><br/><br/>
                    <span>Cost of Expense</span><br/>
                    <input type="number" value={expenseCostState} id="expenseCost"
                           onChange={(e) => setExpenseCostState(+e.target.value) } /><br/><br/>
                    <button onClick={(e) => {
                        e.preventDefault();
                            setExpenseNameState('');
                                setSavedExpensesByName([
                                    ...savedExpensesByName,
                                     {name: expenseNameState}
                                ]);
                            setExpenseCostState();
                                setSavedExpensesByCost([
                                        ...savedExpensesByCost,
                                    {cost: expenseCostState}
                                ]);
                        // handleStoringStates(expenseNameState, expenseCostState);
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
                    <span>More Stuff</span>
                </div>
            </div>
        </div>
    );



    return (
        <div className="App">

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
                <li className="expenseOutputLi" >{savedExpensesByCost.cost}</li>
            ))}
        </div>
    )
}

function ExpenseNamedItem({savedExpensesByName}) {
    cc(savedExpensesByName)

    return (
        <div>
            {savedExpensesByName.map(savedExpensesByName => (
                <li className="expenseOutputLi" >{savedExpensesByName.name}</li>
            ))}
        </div>
    )
}
// function handleStoringStates(setExpenseNameState, setExpenseCostState){
//     // setExpenseNameState('');
//     // setExpenseCostState();
//
//     // localStorage.setItem("Name", expenseNameState);
//     // localStorage.setItem('Cost', expenseCostState);
//     cc(localStorage.getItem("Name"));
//     cc(localStorage.getItem("Cost"));
// }















const peeps = [{
    id: 0,
    name: 'Tom Callies JR',
    relation: 'father'
},{
    id: 1,
    name:'Amy Nelson',
    relation:'mother',
},{
    id: 2,
    name: 'Thomas Callies III',
    relation: "father",
},{
    id: 3,
    name:"Amanda Callies",
    relation:'mother',
},{ id: 4,
    name:'Thomas Callies IV',
    relation:'son',
},{ id: 5,
    name:'Troy Callies',
    relation:'son',
},{ id: 6,
    name:'Ava Callies',
    relation:'daughter',
}];

function Family(){
    // const fathers = peeps.filter(person =>
    //     person.relation === "mother"
    // );
    const listPeeps = peeps.map(person =>
        <li key={person.id} className="familyLi">{person.name}</li>
    );
    return(
        <div>
            <div className="expenseFlexboxInput">
                <div className="expenseFlexboxOutputHeader">
                    <h1>Family</h1>
                </div>
                <ul className="linkStyle"> {listPeeps}</ul>
            </div>
        </div>
    )
}
// function butt({onClick, children}){
//     return(
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

function ItemCarrier(){
    return(
        <div>
            <Item
                isPacked={true}
                name="Space Suit"
            />
            <Item
                isPacked={false}
                name="Space Helmet"
            />
            <Item
                isPacked={true}
                name="Space Boots"
            />
        </div>
    )
}
function Item({name, isPacked}) {

    return (
        <li>
            {name} {isPacked && '✔'}
            {/*{isPacked ? name + '✔ ' : name}*/}
        </li>
    )
}

function Testing(){

    return(
        <div className="App">
            <Nav />
            <h2>Ready for Testing ✔</h2>
            <Expenses/>
            <ItemCarrier/>
            <Family/>
            <div>
                <button onClick={() => alert("want to play a round of Dota before i go to bed?")}>
                    Dota?
                </button>
            </div>
        </div>
    )
}
export default Testing




