import m from "mithril";
import { Taskbar } from "./Taskbar";
import { store, windowEnum, windowFunctions } from "../../Store";
import "./Desktop.css"

export const Desktop = {
    view: view,
    // oninit: oninit,
};

function view(vnode)
{
    let type = "div";
    let attributes = {
        class: "Desktop"
    }
    let windowContainer = m("div")
    let components = [
        // the rest of the children
        ,
        // the taskbar
        m(Taskbar)
    ]
    return m(
        type,
        attributes,
        components
    )
}

// function oninit(vnode)
// {
//     vnode.state.windows = windows;
// }
