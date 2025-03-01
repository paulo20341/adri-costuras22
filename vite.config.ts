import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Mantenha isso para rotas funcionarem
  server: {
    host: '0.0.0.0', // ✅ Obrigatório para o Render
    port: 3000 // Pode ser qualquer número (o Render substitui pela variável PORT)
  }
});