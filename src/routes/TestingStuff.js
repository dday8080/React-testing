import Nav from "./Nav";
import {getImageUrl} from "../FilterableP";


function Avatar ({ person, size}) {
    let avatarSize = 's'
    if (size > 90) {
        avatarSize = 'b'
    }

    return(
        <img
            className="avatar"
            src={getImageUrl(person, avatarSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}



function Testing(){

    return(
        <div className="App">
            <Nav />
            <h2>Testing</h2>
            <Avatar
                person={{
                    name: "Albert Einstein",
                    imageId: "Zg6Vcxs"
                }}
                size={80}
            />
            <Avatar
                person={{
                    name: "Albert Einstein",
                    imageId: "Zg6Vcxs"
                }}
                size={160}
            />
        </div>
    )
}
export default Testing