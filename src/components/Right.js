import Navbar from "./right/Navbar";
import {useContext,createContext,useState} from "react";
import {MyContext} from "../App";
import {bookmarks} from "../data"
import Bookmarks from "./right/Bookmarks/Bookmarks"


export const dataContext = createContext(null)

export default function Right(){

    const [cur, setCur] = useContext(MyContext)

    let sortedData = bookmarks.sort((a,b) => parseFloat(b.price)-parseFloat(a.price))
    const [data, setData] = useState(sortedData)

    return (
        <dataContext.Provider value={[data, setData]}>
            <div className={"right"}>
                <Navbar/>
                {cur === "Bookmarks" && <Bookmarks />}
                {cur === "Favourites" && <Bookmarks fav={true}/>}
            </div>
            </dataContext.Provider>
    )
}