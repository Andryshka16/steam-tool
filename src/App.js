
import {createContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "./components/Home";

export const MyContext = createContext(null)

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/settings"} element={<h1>Here will be settings</h1>}/>
            </Routes>
        </BrowserRouter>

    )
}
