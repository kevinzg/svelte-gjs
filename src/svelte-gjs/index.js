import Gtk from 'gi://Gtk?version=4.0';
import GtkGenericWidget from './GtkGenericWidget.svelte';

export class GtkLabel extends GtkGenericWidget {
    constructor(options) {
        options.props = {
            ...options.props,
            gtkClass: Gtk.Label,
            react: (widget, props) => {
                widget.set_label(props.label);
            },
        };
        super(options);
    }
}

export class GtkButton extends GtkGenericWidget {
    constructor(options) {
        options.props = {
            ...options.props,
            gtkClass: Gtk.Button,
            events: ['clicked'],
        };
        super(options);
    }
}

export class GtkEntry extends GtkGenericWidget {
    constructor(options) {
        options.props = {
            ...options.props,
            gtkClass: Gtk.Entry,
            bindings: [
                {
                    event: 'changed',
                    getValue: (widget) => widget.get_text(),
                    setValue: (widget, value) => widget.set_text(value),
                },
            ],
        };
        super(options);
    }
}

export class GtkBox extends GtkGenericWidget {
    constructor(options) {
        options.props = {
            ...options.props,
            gtkClass: Gtk.Box,
        };
        super(options);
    }
}

export { default as GLib } from 'gi://GLib';
export { default as Gtk } from 'gi://Gtk?version=4.0';
export { default as GtkWindow } from './GtkWindow.svelte';
