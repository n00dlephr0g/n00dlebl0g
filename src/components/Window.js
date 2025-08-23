import m from "mithril";
import "../css/Window.css"



export const Window = () => {
        return {

            view: function(vnode) {
                const { title, children } = vnode.attrs;



                return m("div", {
                    class: "Window"
                }, 
                [
                    m("div", {class: "Titlebar"}),
                    m("div", {
                        class: "ContentWindow",
                        onmousedown: vnode.state.onmousedown,
                    }, vnode.children)
                ]
            )
        },
    };
};
