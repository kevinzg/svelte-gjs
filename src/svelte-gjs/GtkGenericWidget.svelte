<script>
    import { createEventDispatcher, getContext, setContext } from "svelte";
    import Gtk from "gi://Gtk?version=4.0";

    export let gtkClass; // GTK class to instantiate
    export let events = []; // GTK events to connect
    export let value; // Prop to bind input values
    export let bindings = []; // Binding rules
    export let react; // Called whenever rest props change

    const widget = new gtkClass({
        valign: Gtk.Align.CENTER,
        halign: Gtk.Align.CENTER,
        ...$$restProps,
    });
    const parent = getContext("gtk.parent");
    if (parent instanceof Gtk.Window) {
        parent.set_child(widget);
    } else {
        parent.append(widget);
    }
    setContext("gtk.parent", widget);

    // Handle events
    const dispatch = createEventDispatcher();
    events.forEach((name) => {
        widget.connect(name, (ev) => dispatch(name, ev));
    });

    // Handle bindings
    bindings.forEach(({ event, getValue, setValue }) => {
        setValue(widget, value);
        widget.connect(event, () => {
            value = getValue(widget);
        });
    });

    $: react && react(widget, $$restProps);
</script>

<slot />
