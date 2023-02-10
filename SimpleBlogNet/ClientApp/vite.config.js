import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePluginRadar({
            analytics: {
                id: 'G-XXXXXXXXXX',
            },
        })
    ],
    base: "/blog/",
    server: {
        proxy: {
            '/blog/api': {
                target: 'http://localhost:5001',
                rewrite: (path) => path.replace(/^\/blog/, ''),
            }
        }
    }
})
