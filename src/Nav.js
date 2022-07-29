import "./App.css"

export function Welcome(){
    function onclick(){
        return  alert("welcome to bad alert is annoying");
    }
    return(
        <div>
            <button onClick={onclick}>Welcome</button>
        </div>
    )
}