# Umi-4.0-Cesium
Cesium run with Umi 4.0

整体来说，和 Umi3.5区别不大，但是这个区别在 umi4.0的文档中并没有说明，所以，如果不是去看源码，光凭测试或者是猜测的话，需要花的时间基本不可预估。
对于 Cesium 来说，最大的影响，应该是 copy 这个 feature 里边，to 的根目录由 umi 3.5 的 dist，变成了 `__dirname`。
```ts
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

```
