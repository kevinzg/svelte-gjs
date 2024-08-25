// This is the same app using GJS directly
import Gtk from 'gi://Gtk?version=4.0';
import GLib from 'gi://GLib';

// Initialize the app
Gtk.init();
const loop = GLib.MainLoop.new(null, false);

// Create a window
const win = new Gtk.Window({
    title: 'My Window',
    default_width: 280,
    default_height: 160,
});
win.connect('close-request', () => loop.quit());

const box = new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
    spacing: 10,
    valign: Gtk.Align.CENTER,
    halign: Gtk.Align.CENTER,
});
win.set_child(box);

let text = 'World!';
let label_text = () => `Hello ${text}!`;
const label_hello = new Gtk.Label({
    label: label_text(),
    valign: Gtk.Align.CENTER,
    halign: Gtk.Align.CENTER,
});
box.append(label_hello);

const entry = new Gtk.Entry({
    text: text,
    valign: Gtk.Align.CENTER,
    halign: Gtk.Align.CENTER,
});
box.append(entry);

entry.connect('changed', () => {
    text = entry.get_text();
    label_hello.set_label(label_text());
});

let counter = 0;
const label_counter = new Gtk.Label({
    label: `${counter}`,
    valign: Gtk.Align.CENTER,
    halign: Gtk.Align.CENTER,
});
box.append(label_counter);

const hbox = new Gtk.Box({
    orientation: Gtk.Orientation.HORIZONTAL,
    spacing: 10,
    valign: Gtk.Align.CENTER,
    halign: Gtk.Align.CENTER,
});
box.append(hbox);

const button1 = new Gtk.Button({
    label: '+',
    valign: Gtk.Align.CENTER,
    halign: Gtk.Align.CENTER,
});
button1.connect('clicked', () => {
    counter++;
    label_counter.set_label(`${counter}`);
});
hbox.append(button1);

const button2 = new Gtk.Button({
    label: '-',
    valign: Gtk.Align.CENTER,
    halign: Gtk.Align.CENTER,
});
button2.connect('clicked', () => {
    counter--;
    label_counter.set_label(`${counter}`);
});
hbox.append(button2);

// Run the app
win.present();
loop.run();
