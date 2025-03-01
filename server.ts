import { createServer } from 'http';
import { parse } from 'url';
import { resolve } from 'path';
import { createReadStream } from 'fs';

const port = Number(process.env.PORT) || 3000;
const __dirname = resolve();

// Configuração do servidor
const server = createServer((req, res) => {
  const url = parse(req.url || '/');

  // Rotas da API
  if (url.pathname === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: "API funcionando!" }));
  }

  // Serve arquivos estáticos do Vite
  const filePath = resolve(
    __dirname,
    'dist',
    url.pathname === '/' ? 'index.html' : url.pathname?.substring(1) || 'index.html'
  );

  createReadStream(filePath)
    .on('error', () => {
      // Fallback para React Router
      createReadStream(resolve(__dirname, 'dist', 'index.html')).pipe(res);
    })
    .pipe(res);
});

// Inicia o servidor
server.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando em: http://0.0.0.0:${port}`);
});