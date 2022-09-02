import BookMarkDiv from "./BookMarkDiv"
import {useContext} from "react";
import {dataContext} from "../../Right";

export default function Bookmarks({fav}){

    let [data, setData] = useContext(dataContext)

    return (
        <div className={"panel bookmarks"}>
            {data.map((elm, index)=>(fav && elm.favourite || !fav) && <BookMarkDiv
                {...elm}
                id={index}
                key={elm.name+elm.price}/>)}
        </div>
    )
}
