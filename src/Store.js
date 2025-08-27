import m from "mithril"

let count = 0;

export let store = {
    windows: [],
};

export let windowEnum = {
    windowState: Object.freeze({
        MAXIMISED: 'max',
        WINDOWED: 'win',
        MINIMISED: 'min',
    }),

    windowType: Object.freeze({
        TEST: "test"
    })

};

export let windowFunctions = {
    new: (windowTitle, windowType) => {
        windowData = {
            ID: 0,
            state: windowEnum.windowState.MAXIMISED,
            windowTitle: windowTitle, 
            windowType: windowType,
        };
        store.windows.push(windowData);
    },

    close: (id) => {
        store.windows.filter(window => window.ID == id);
    },

    to_top: (id) => {
        target = store.windows.find(window => window.ID == id);
        store.windows.filter(window => window.ID == window.ID);
        store.windows.push(target);
    },


};