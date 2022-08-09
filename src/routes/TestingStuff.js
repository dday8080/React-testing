import Nav from "./Nav";
// import {getImageUrl} from "../FilterableP";

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
            <ItemCarrier/>
            <Family/>


        </div>
    )
}
export default Testing




