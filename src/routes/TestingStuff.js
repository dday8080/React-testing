import Nav from "./Nav";
// import {getImageUrl} from "../FilterableP";

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
            <h2>Ready for space ✔</h2>
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
export default Testing




