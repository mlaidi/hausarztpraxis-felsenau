import { NextResponse } from 'next/server';

const GONE_PATTERNS = [
  /^\/feed(\/.*)?$/i,
  /^\/comments\/feed(\/.*)?$/i,
  /^\/wp-(content|admin|includes|json)(\/.*)?$/i,
  /^\/wp-.*\.php$/i,
  /^\/xmlrpc\.php$/i,
];

// Mapping of historical 404 URLs to clean 301 destinations
const REDIRECT_MAP = [
  // 1. Specific services
  { test: /^\/service\/herzuntersuchung\/?$/i, dest: '/leistungen/herzuntersuchung' },
  { test: /^\/service\/urologie\/?$/i, dest: '/leistungen/urologie' },
  { test: /^\/service\/weitere-untersuchungen\/?$/i, dest: '/leistungen/weitere-untersuchungen' },
  // 2. Service generic -> leistungen
  { test: /^\/service\/([a-zA-Z0-9_-]+)\/?$/i, dest: (m) => `/leistungen/${m[1].toLowerCase()}` },
  // 3. leistungen directory root
  { test: /^\/leistungen\/?$/i, dest: '/#services' },
  { test: /^\/leistungen-alt(\/.*)?$/i, dest: '/#services' },
  // 4. Old service listing
  { test: /^\/hausarztpraxis-felsenau-leistungen\/?$/i, dest: '/#services' },
  { test: /^\/1-column-services\/?$/i, dest: '/#services' },
  // 5. galerie
  { test: /^\/galerie(\/.*)?$/i, dest: '/#about' },
  { test: /^\/Galerienartikel-Typ(\/.*)?$/i, dest: '/#about' },
  { test: /^\/gallery-item(\/.*)?$/i, dest: '/#about' },
  // 6. author
  { test: /^\/author(\/.*)?$/i, dest: '/#team' },
  // 7. doctors & team archives
  { test: /^\/(doctor|team)\/(dr-)?saskia-rodriguez\/?$/i, dest: '/aerzte/dr-saskia-rodriguez' },
  { test: /^\/(doctor|team)\/(dipl-arzt-|dr-)?awad-abuawad\/?$/i, dest: '/aerzte/dipl-arzt-awad-abuawad' },
  { test: /^\/(doctor|team)\/(dr-)?fedi-farah\/?$/i, dest: '/aerzte/dr-fedi-farah' },
  { test: /^\/(doctor|team)\/(dr-)?mariem\/?$/i, dest: '/aerzte/dr-mariem' },
  { test: /^\/team\/([a-zA-Z0-9_-]+)\/?$/i, dest: (m) => `/aerzte/${m[1].toLowerCase()}` },
  { test: /^\/doctor(\/.*)?$/i, dest: '/#team' },
  { test: /^\/team\/?$/i, dest: '/#team' },
  // 8. home & 810
  { test: /^\/home(\/.*)?$/i, dest: '/' },
  { test: /^\/810(\/.*)?$/i, dest: '/' },
  // 9. FAQ
  { test: /^\/faq(s)?\/?$/i, dest: '/#faq' },
  // 10. category & news
  { test: /^\/category(\/.*)?$/i, dest: '/' },
  { test: /^\/news(\/.*)?$/i, dest: '/' },
  { test: /^\/grippesaison-gesundheitstipps-fur-den-winter\/?$/i, dest: '/' },
  // 11. Appointments, vacancies, contact
  { test: /^\/freie-stellen\/?$/i, dest: '/#contact' },
  { test: /^\/make-an-appointment\/?$/i, dest: '/#contact' },
  { test: /^\/(contact|kontakt)\/?$/i, dest: '/#contact' },
  { test: /^\/termin\/?$/i, dest: '/#contact' },
  // 12. About / Über uns
  { test: /^\/(about|uber-uns)\/?$/i, dest: '/#about' },
  // 13. Impressum trailing slash normalization
  { test: /^\/impressum\/$/i, dest: '/impressum' },
];

export function middleware(request) {
  const { pathname, searchParams, host } = request.nextUrl;
  const headerHost = request.headers.get('x-forwarded-host') || request.headers.get('host') || host || '';

  // 1. Canonical 301 from www to non-www
  if (headerHost.includes('www.praxis-felsenau.ch') || headerHost.includes('ipv4.praxis-felsenau.ch')) {
    const canonicalUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://praxis-felsenau.ch');
    return NextResponse.redirect(canonicalUrl, 301);
  }

  // 2. 301 Redirects for historical 404 addresses to preserve authority
  for (const rule of REDIRECT_MAP) {
    const match = pathname.match(rule.test);
    if (match) {
      const destination = typeof rule.dest === 'function' ? rule.dest(match) : rule.dest;
      const targetUrl = new URL(destination, 'https://praxis-felsenau.ch');
      return NextResponse.redirect(targetUrl, 301);
    }
  }

  // 3. Return HTTP 410 Gone for pure bot / scanner endpoints with no user equivalent
  for (const pattern of GONE_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse(null, {
        status: 410,
        statusText: 'Gone',
        headers: {
          'X-Robots-Tag': 'noindex, nofollow',
          'Cache-Control': 'public, max-age=604800, stale-while-revalidate=86400',
        },
      });
    }
  }

  // 4. Strip WordPress search query params (?s=...)
  if (searchParams.has('s')) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('s');
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // 5. Strip WordPress pagination query params (?_page=2)
  if (searchParams.has('_page')) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('_page');
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  // 6. Strip rest_route query params
  if (searchParams.has('rest_route')) {
    return new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)',
  ],
};
