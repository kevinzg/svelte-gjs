import Gtk from 'gi://Gtk?version=4.0';
import GLib from 'gi://GLib';
import App from './App.svelte';

// Initialize the app
Gtk.init();
const loop = GLib.MainLoop.new(null, false);

window.document = {
    createTextNode() {
        return {};
    },
};

window.CustomEvent = class CustomEvent {
    constructor(name, options) {
        this.name = name;
        this.options = options;
    }
};

export const app = new App({
    context: new Map([['gtk.loop', loop]]),
    target: {
        insertBefore: () => {},
    },
});

loop.run();
