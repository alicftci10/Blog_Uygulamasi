import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 52155,
    },
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                login: "login.html",
            },
        },
    }
})