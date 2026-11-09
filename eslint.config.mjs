import nextConfig from 'eslint-config-next';

const nextFlatConfig = [...nextConfig, {
  ignores: ['.next/**', 'node_modules/**'],
}];

export default nextFlatConfig;
