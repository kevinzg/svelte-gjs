<script>
    import Gtk from "gi://Gtk?version=4.0";
    import { setContext, getContext, onMount } from "svelte";

    export let title = "My Window!";
    export let default_width = 200;
    export let default_height = 200;

    const loop = getContext("gtk.loop");
    let win = new Gtk.Window({
        title,
        default_width,
        default_height,
    });
    win.connect("close-request", () => loop.quit());
    setContext("gtk.window", win);
    setContext("gtk.parent", win);

    onMount(() => win.present());
</script>

<slot />
