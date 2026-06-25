import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  // Desativa o PWA no modo de desenvolvimento para não atrapalhar com cache antigo enquanto você programa
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Se você tiver outras configurações do Next.js, elas ficam aqui dentro
};

export default withPWA(nextConfig);