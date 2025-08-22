import m from "mithril";
import "/src/css/Basic.css"

export const MovingBox = () => {
    return {
        view: function() {
            m("p", {class: "box"}, "hyello")
        }
    }
}