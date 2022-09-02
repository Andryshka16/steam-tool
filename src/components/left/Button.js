import {useContext} from "react";
import {MyContext} from "../../App";

const LeftSideBtnImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_bookmark.svg/2048px-OOjs_UI_icon_bookmark.svg.png",
    "https://cdn-icons-png.flaticon.com/512/130/130188.png",
    "https://cdn-icons-png.flaticon.com/512/880/880594.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/OOjs_UI_icon_history.svg/1024px-OOjs_UI_icon_history.svg.png",
]


function Image({src}){
    return (
        <img src={src}
             alt=""
             width={25}
             className={"blackImage"}
        />
    )
}

export default function Button({elm: name,index}){

    let imageSource = LeftSideBtnImages[index]
    let [cur, setCur] = useContext(MyContext)

    return (
        <div className={'inlineDiv btn'} onClick={()=>setCur(name)}>
            <Image src={imageSource}/>
            <h3 className={"btnName"}>{name}</h3>
        </div>
    )
}