import {useContext, useRef} from "react";
import {MyContext} from "../../App";
import {NavLink} from "react-router-dom";

const navBarIcons = [
    {"notifications": "https://cdn-icons-png.flaticon.com/512/77/77682.png"},
    {"email": "https://cdn-icons-png.flaticon.com/512/546/546394.png"},
    {"account": "http://cdn.onlinewebfonts.com/svg/img_335286.png"},
    {"settings": "https://cdn-icons-png.flaticon.com/512/126/126472.png?w=360"}
]

function SearchIcon({reference}){
    return (
        <img
            id={"searchIcon"}
            src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/search-icon.png"
            alt=""
            style={{marginLeft: "15px"}}
            width={25}
            onClick={()=>reference.current.focus()}
        />
    )
}

function Search(){

    const r = useRef(null)

    return (
        <div className={"inlineDiv"} id={"search"}>
            <input type="text" id={"searchInp"} ref={r} placeholder={" search"}/>
            <SearchIcon reference={r}/>
        </div>
    )
}

function Icon({source, link}){

    return (
        <NavLink to={link}>
            <img
                src={source}
                alt=""
                width={30}
                style={{marginRight: "15px"}}
                className={"blackIcon"}
            />
        </NavLink>

    )
}

export default function Navbar(){

    let [cur, setCur] = useContext(MyContext)

    return (
        <div className={"inlineDiv"}>
            <h1>{cur}</h1>
            <Search/>
            {navBarIcons.map(elm=> {
                let [k,v] = Object.entries(elm)[0]
                return <Icon source={v} link={"/" + k} key={v}/>
            })}
        </div>
    )
}