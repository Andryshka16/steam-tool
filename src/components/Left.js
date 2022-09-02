
import Logo from "./left/Logo.js"
import Account from "./left/Account.js"
import Button from "./left/Button.js"

const LeftSideButtons = ["Bookmarks", "Favourites", "Friends", "History"]

export default function Left(){

    return <div className={"panel left"}>
        <Logo/>
        <Account/>
        {LeftSideButtons.map((elm,index)=><Button elm={elm} index={index} key={elm}/>)}

    </div>
}