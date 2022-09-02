
import Left from "./Left";
import Right from "./Right";
import {MyContext} from "../App";
import {useState} from "react";

export function Home(){
    const [tab, setTab] = useState("Bookmarks")
    return (
        <MyContext.Provider value={[tab, setTab]}>
            <div id={"app"}>
                <Left/>
                <Right/>
            </div>
        </MyContext.Provider>
    )
}