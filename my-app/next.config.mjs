// my-app/next.config.mjs

// 1. CONFIRME: Este é o nome EXATO do seu repositório no GitHub?
const repoName = 'github-pages-cicd-joaovictor-18';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração principal para exportação estática
  output: 'export',

  // Configuração para assets (CSS, JS, imagens) funcionar no GitHub Pages
  // Adiciona /NOME_DO_REPO/ na frente dos links de assets em produção
  assetPrefix: isProd ? `/${repoName}/` : '',

  // Configuração para rotas (links) funcionar no GitHub Pages
  // Adiciona /NOME_DO_REPO/ na frente das rotas em produção
  basePath: isProd ? `/${repoName}` : '',

  // Desabilita a otimização de imagens do Next.js (necessário para 'output: export')
  images: {
    unoptimized: true,
  },

  // Opcional: Se você NÃO quiser o "/nome-do-repo" no final dos links internos
  // (pode causar problemas com navegação se não for bem gerenciado)
  // trailingSlash: true,
};

export default nextConfig;