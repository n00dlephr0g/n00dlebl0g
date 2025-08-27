import m from "mithril";
import "./App.css";
import { Screen } from "./Components/Screen"

export const App = () => {
    return {
        view: function(vnode) 
        {
            return m(Screen);
        },
    };
};
