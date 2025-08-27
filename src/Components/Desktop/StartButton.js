import m from "mithril";

export const StartButton = {
    view: view,
};

function view(vnode)
{
    let type = "div";
    let attributes = {
        class: "StartButton"
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