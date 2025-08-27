import m from "mithril"


let count = 0;
export let windowStore = {
    windows: [],

    defaut: {
        windowID: 0,
        windowState: null,
        zindex: count,
        windowTitle: "change me",
        windowApp: "change me"
    },

    open_window: function (windowData)
    {
        windows.push(windowData);
        count++;
    },

    close_window: function (windowID)
    {
        windows = windows.filter()
    },

    windowState: Object.freeze({
        MAXIMISED: 'max',
        WINDOWED: 'win',
        MINIMISED: 'min',
    }),

}