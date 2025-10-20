// next.config.mjs

// 1. Defina o nome do seu repositório aqui
const repoName = 'github-pages-cicd-joaovictor-18';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração principal para exportação estática
  output: 'export',

  // Configuração para assets (CSS, JS, imagens)
  // Necessário para funcionar no GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : '',

  // Configuração para rotas (links)
  // Necessário para funcionar no GitHub Pages
  basePath: isProd ? `/${repoName}` : '',

  // Desabilita a otimização de imagens do Next.js,
  // pois ela não funciona na exportação estática.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;