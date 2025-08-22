import m from "mithril";
import "../css/Window.css"


const Titlebar = () => {
    return {
        view: function(vnode) {
            return m("div", {class: "Titlebar"}, vnode.children);
        },
    };
};

export const Window = () => {
        return {
            oninit: function(vnode) {
                vnode.state.viewmode = 1;
            },
            view: function(vnode) {
                return m("div", [
                    m(Titlebar),
                    m("div", {class: "ContentWindow"}, vnode.children)
                ])
        },
    };
};
