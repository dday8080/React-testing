
import './App.css';
import {useState} from "react";
let cc = console.log

const PRODUCTS = [
    {category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
    {category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
    {category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
    {category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
    {category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
    {category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'},
];

function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false)

    return(
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
}

function SearchBar ({filterText, inStockOnly, onFilterTextChange,onInStockOnlyChange }) {

    return (
        <form>
            <input
                type="text"
                value={filterText}
                placeholder="search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label><br/>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                onChange={(e) => onInStockOnlyChange(e.target.value)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

function ProductTable ({products, filterText, inStockOnly}) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if(
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                category={product.category}
                key={product.category} />
            );
        }
        rows.push(
            <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function ProductRow({product}) {
    const name = product.stocked ? product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>
    return(
      <tr>
          <td>{name}</td>
          <td>{product.price}</td>
      </tr>
    );
}

function ProductCategoryRow ({category}) {
    return(
        <tr>
            <th colSpan='2'>
                {category}
            </th>
        </tr>
    );
}


function MyButton({count, onClick}) {

    return (
        <button onClick={onClick}>
            Touched me {count} times
        </button>
    );
}
function Header() {
    return (
        <header>
            <span> <br/> Welcome to my new React Sampling!</span><br/><br/>
            <span> Welcome to the Danger Zone</span><br/>
        </header>
    );
}


function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

  return (

    <div className="App">
        <Header />
        <div>
            <br/>
            <Avatar /><br/><br/>
            <MyButton count={count} onClick={handleClick} />
            <FilterableProductTable products={PRODUCTS} />
            {/*<Products />*/}
            {/*<MyButton count={count} onClick={handleClick} />*/}

        </div>
    </div>
    );

}




export default App;

function Avatar() {
    const user = {
        name: 'Albert Einstein',
        imageUrl:'data:image/jpeg;base64,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',
        imageSize: 90,
    }
    return(
        <>
        <h1>{user.name}</h1>
            <img
                className='avatar'
                src={user.imageUrl}
                alt={'photo of' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

// function Products () {
//     const produce = [
//         {title: 'Cabbage', isFruit: false, id: 1},
//         {title: 'Garlic', isFruit: false, id: 2},
//         {title: 'Apple', isFruit: true, id: 3},
//     ];
//     const listItems = produce.map(produce =>
//         <li
//             key={produce.id}
//             style={{
//                 color:produce.isFruit ? 'magenta' : 'darkgreen'
//             }}
//         >
//             {produce.title}
//         </li>
//     );
//     return(
//         <ul>{listItems}</ul>
//     );
// }