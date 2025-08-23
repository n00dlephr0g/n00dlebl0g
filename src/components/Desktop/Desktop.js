import m from "mithril";
import { Taskbar } from "./Taskbar";
import "./Desktop.css"

export const Desktop = {
    view: view,
};

function view(vnode)
{
    let type = "div";
    let attributes = {
        class: "Desktop"
    }
    let components = [
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
