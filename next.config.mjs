/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/myshell',
        destination: 'https://app.myshell.ai/share/bENnem',
        permanent: false
      },
      {
        source: '/wiki',
        destination: 'https://en.wikipedia.org/wiki/Jin_Ping_Mei',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
