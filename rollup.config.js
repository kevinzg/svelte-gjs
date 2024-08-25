import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/main.js',
    output: {
        file: 'build/bundle.js',
        format: 'es',
    },
    plugins: [
        svelte({}),
        resolve({
            browser: true,
            exportConditions: ['svelte'],
            extensions: ['.svelte']
        }),
    ],
    external: ['gi://Gtk?version=4.0', 'gi://GLib']
}
