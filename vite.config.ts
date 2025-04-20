import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import path from 'path';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "./src/app"),
            "@entities": path.resolve(__dirname, "./src/entities"),
            "@features": path.resolve(__dirname, "./src/features"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@widgets": path.resolve(__dirname, "./src/widgets"),
            "@processes": path.resolve(__dirname, "./src/processes"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@layouts": path.resolve(__dirname, "./src/layouts"),
            "@custom-types": path.resolve(__dirname, "./src/custom-types"),
        }
    }

})
