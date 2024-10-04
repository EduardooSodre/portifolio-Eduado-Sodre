const withPlugins = require("next-compose-plugins");
const yamlLoader = require("yaml-loader");

function webpackconfig(config, { isServer }) {
  // Adicionando suporte para arquivos .md e .yaml
  config.module.rules.push(
    {
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    },
    {
      test: /\.ya?ml$/,
      type: "json", // Necessário para Webpack v4
      use: "yaml-loader",
    }
  );

  return config;
}

const nextConfig = {
  // O compress do Next.js já faz a compressão GZIP
  compress: true,

  webpack: webpackconfig,

  // Outras configurações podem ser adicionadas aqui
  images: {
    // Configuração nativa de otimização de imagens do Next.js
    domains: ['example.com'], // Substitua com seus domínios de imagem permitidos
    formats: ['image/avif', 'image/webp'], // Suporte a formatos modernos
  },
};

module.exports = withPlugins([], nextConfig);