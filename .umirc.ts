import { defineConfig } from "umi";
import routes from "./config/routes";
import path from 'path';

const cesium = 'node_modules/cesium/Build/Cesium';
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

export default defineConfig({
  npmClient: 'pnpm',
  routes: routes,
  plugins: [
      "@umijs/plugins/dist/dva",
  ],
  // copy: [{ from: path.join(cesium, ''), to: 'cesium' }],
  mfsu: {
    exclude: [
        'cesium'
    ]
  },
  copy: [
    { from: path.join(cesiumSource, cesiumWorkers), to: 'dist/Workers' },
    { from: path.join(cesiumSource, 'Assets'), to: 'dist/Assets' },
    { from: path.join(cesiumSource, 'Widgets'), to: 'dist/Widgets' },
  ],
  define: {
    CESIUM_BASE_URL: '/',
  },
  dva: {
    immer: {
      enableES5: true,
      enableAllPlugins: true,
    },
  },
});
