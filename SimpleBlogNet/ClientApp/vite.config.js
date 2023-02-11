import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePluginRadar } from 'vite-plugin-radar'
import { ViteEjsPlugin } from 'vite-plugin-ejs'

// https://vitejs.dev/config/
export default ({ mode }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()))

    return defineConfig({
        plugins: [
            react(),
            ViteEjsPlugin((viteConfig) => ({
                env: viteConfig.env,
            })),
            VitePluginRadar({
                analytics: {
                    id: process.env.VITE_ANALYTICS_ID,
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
}
