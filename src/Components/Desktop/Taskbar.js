import m from "mithril";
import { StartButton } from "./StartButton";

export const Taskbar = {
    view: view,
};

function view(vnode)
{
    let type = "div";
    let attributes = {
        class: "Taskbar"
    }
    let components = [
        m(StartButton),
        vnode.children,
    ]
    return m(
        type,
        attributes,
        components
    )
}

