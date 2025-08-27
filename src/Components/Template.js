import m from "mithril";

export const Template = {
    view: view,
};

function view(vnode)
{
    let type = "div";
    let attributes = {
        class: "Template"
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