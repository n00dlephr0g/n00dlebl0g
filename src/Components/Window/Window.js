import m from "mithril";
import "xp.css"

export const Window = {
    oninit: function(vnode) { 
        vnode.state.view = 1;
        vnode.state.width = 800;
        vnode.state.height = 600;
    },

    view: function(vnode) {
        return m(
            "div", 
            { 
                class: "Window",
                style: {
                    width: `${vnode.state.width}px`,
                    height: `${vnode.state.height}px`
                }
            }, 
            [
                // Titlebar
                m("div", {class: "Titlebar"}),
                // Content Window
                m(
                    "div", 
                    {
                        class: "ContentWindow",
                        onmousedown: vnode.state.onmousedown,
                    }, 
                    vnode.children
                )
            ]
        )
    }
};

func