<script>
    import {
        Gtk,
        GtkWindow,
        GtkBox,
        GtkButton,
        GtkLabel,
        GtkEntry,
    } from "./svelte-gjs/index.js";
    let counter = 0;
    let text = "World";
</script>

<GtkWindow
    title="My Svelte-Gtk Window!"
    default_width={280}
    default_height={160}
>
    <GtkBox spacing={10} orientation={Gtk.Orientation.VERTICAL}>
        <GtkLabel label={`Hello ${text}!`} />
        <GtkEntry bind:value={text} />
        <GtkLabel label={`Counter: ${counter}`} />
        <GtkBox spacing={10} orientation={Gtk.Orientation.HORIZONTAL}>
            <GtkButton label="+" on:clicked={() => (counter += 1)} />
            <GtkButton label="-" on:clicked={() => (counter -= 1)} />
        </GtkBox>
    </GtkBox>
</GtkWindow>
