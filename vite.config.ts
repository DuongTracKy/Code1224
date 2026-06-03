import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig(() => {
  // Tự động dùng HTTPS nếu có cert, fallback về HTTP (localhost vẫn OK)
  let httpsConfig: any = false;
  try {
    if (fs.existsSync('./cert/cert.pem') && fs.existsSync('./cert/key.pem')) {
      httpsConfig = {
        cert: fs.readFileSync('./cert/cert.pem'),
        key: fs.readFileSync('./cert/key.pem'),
      };
    }
  } catch {}

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: { '@': path.resolve(__dirname, '.') },
    },
    server: {
      // FIX: Luôn chạy trên localhost → getUserMedia hoạt động không cần HTTPS
      host: 'localhost',
      port: 5173,
      https: httpsConfig,
      hmr: true,
    },
  };
});
