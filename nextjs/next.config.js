/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  compress: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'praxis-felsenau.ch',
        pathname: '/wp-content/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.praxis-felsenau.ch' }],
        destination: 'https://praxis-felsenau.ch/:path*',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/810',
        destination: '/',
        permanent: true,
      },
      {
        source: '/810/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/leistungen',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/leistungen/',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/leistungen-alt/:path*',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/hausarztpraxis-felsenau-leistungen',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/hausarztpraxis-felsenau-leistungen/',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/hausarzt-wald',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/hausarzt-wald/',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/galerie',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/galerie/:path*',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/Galerienartikel-Typ/:path*',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/hausaerzte-wald',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/hausaerzte-wald/:path*',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/service/herzuntersuchung',
        destination: '/leistungen/herzuntersuchung',
        permanent: true,
      },
      {
        source: '/service/herzuntersuchung/',
        destination: '/leistungen/herzuntersuchung',
        permanent: true,
      },
      {
        source: '/Service/herzuntersuchung',
        destination: '/leistungen/herzuntersuchung',
        permanent: true,
      },
      {
        source: '/Service/herzuntersuchung/',
        destination: '/leistungen/herzuntersuchung',
        permanent: true,
      },
      {
        source: '/service/urologie',
        destination: '/leistungen/urologie',
        permanent: true,
      },
      {
        source: '/service/urologie/',
        destination: '/leistungen/urologie',
        permanent: true,
      },
      {
        source: '/service/weitere-untersuchungen',
        destination: '/leistungen/weitere-untersuchungen',
        permanent: true,
      },
      {
        source: '/service/weitere-untersuchungen/',
        destination: '/leistungen/weitere-untersuchungen',
        permanent: true,
      },
      {
        source: '/service/:slug',
        destination: '/leistungen/:slug',
        permanent: true,
      },
      {
        source: '/Service/:slug',
        destination: '/leistungen/:slug',
        permanent: true,
      },
      {
        source: '/freie-stellen',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/freie-stellen/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/make-an-appointment',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/make-an-appointment/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/contact/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/kontakt/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/termin',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/termin/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/about/',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/uber-uns',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/uber-uns/',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/team/:slug',
        destination: '/aerzte/:slug',
        permanent: true,
      },
      {
        source: '/doctor/:slug',
        destination: '/aerzte/:slug',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/team/',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/doctor',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/doctor/',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      {
        source: '/faq/',
        destination: '/#faq',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/#faq',
        permanent: true,
      },
      {
        source: '/faqs/',
        destination: '/#faq',
        permanent: true,
      },
      {
        source: '/category/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/grippesaison-gesundheitstipps-fur-den-winter',
        destination: '/',
        permanent: true,
      },
      {
        source: '/grippesaison-gesundheitstipps-fur-den-winter/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/impressum/',
        destination: '/impressum',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
