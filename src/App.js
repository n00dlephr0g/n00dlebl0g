import m from "mithril";
import "./css/App.css";
import { Window } from "./components/Window";

export const App = () => {
    return {
        view: function(vnode) {
            return m(Window, {style: "center"}, [
                    m("h1", {style: "margin:auto"},"My Mithril App"),
            ]
                );
        },
    };
};
