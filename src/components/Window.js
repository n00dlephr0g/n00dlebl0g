import m from "mithril";
import "../css/Window.css"



export const Window = () => {
        return {
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
        },
    };
};
