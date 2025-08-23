import m from "mithril"
import "./Screen.css"
import { Desktop } from "./Desktop/Desktop";


export const Screen = () => {
    return {
        view: view
    };
};

function view(vnode)
{
    var type = "div"
    var attributes = {
        class: "Screen"
    };
    var components = [
        m(Desktop)
    ]
    return m(
        type, 
        attributes, 
        components
    )
}