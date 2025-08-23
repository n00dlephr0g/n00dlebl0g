import m from "mithril";

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
        vnode.children,
    ]
    return m(
        type,
        attributes,
        components
    )
}