import {dataContext} from "../../Right";
import {useContext} from "react";

function Star(props){

    let [data, setData] = useContext(dataContext)
    let styles = {filter: props.filled? "invert(0)" : "invert(0.5)"}

    return <img
        src="https://freeiconshop.com/wp-content/uploads/edd/star-outline-filled.png"
        className={"star"}
        alt=""
        style={styles}
        onClick={(event)=>{
            setData(data.map((elm, idx)=>idx !== props.id ? elm: {...elm, favourite: !elm.favourite}))
            event.stopPropagation()
        }}
    />
}

export default function BookMarkDiv({name, quality, source, image, price, favourite, id}) {
    return <div className={"inlineDiv"} id={"bookmark"} onClick={()=>window.open(source)}>

        <div className={"inlineDiv LogoAndName"}>
            <img src={image} alt="" width={80}/>
            <h2>{name}</h2>
        </div>

        <div className={"inlineDiv"} style={{margin: 0}}>
            <div className={"inlineDiv PriceAndQuantity"}>
                <h2>{quality}</h2>
                <h2>{price}</h2>
            </div>
            <Star filled={favourite} id={id}/>
        </div>

    </div>
}
