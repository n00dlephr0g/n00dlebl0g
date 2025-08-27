import m from "mithril";
import { Taskbar } from "./Taskbar";
import { windowStore } from "../../Store";
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
    let components = [];
    [
        // the rest of the children 
        vnode.children,
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
