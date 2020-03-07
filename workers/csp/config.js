// This should come from KV store
export const securityHeaders = [
  {
    name: 'strict-transport-security',
    value: 'max-age=63072000; includeSubdomains; preload',
  },
  {
    name: 'content-security-policy-report-only',
    value: {
      'default-src': [`'none'`],
      'img-src': [`'self'`],
      'font-src': [`'self'`],
      'connect-src': [`'self'`],
      'navigate-to': [`'self'`],
      'script-src': [
        `'self'`,
        `'unsafe-inline'`,
        `https:`,
        `'report-sample'`,
        `'strict-dynamic'`,
        `'nonce'`,
      ],
      'script-src-elem': [
        `'self'`,
        `'unsafe-inline'`,
        `https:`,
        `'report-sample'`,
        `'strict-dynamic'`,
        `'nonce'`,
      ],
      'script-src-attr': [
        `'self'`,
        `'unsafe-inline'`,
        `https:`,
        `'report-sample'`,
        `'strict-dynamic'`,
        `'nonce'`,
      ],
      'style-src': [
        `'self'`,
        `'unsafe-inline'`,
        `https:`,
        `'report-sample'`,
        `'strict-dynamic'`,
        `'nonce'`,
      ],
      'style-src-elem': [
        `'self'`,
        `'unsafe-inline'`,
        `https:`,
        `'report-sample'`,
        `'strict-dynamic'`,
        `'nonce'`,
      ],
      'style-src-attr': [`'unsafe-hashes'`, `'inline-hash'`],
      'base-uri': [`'none'`],
      'object-src': [`'none'`],
      'frame-ancestors': [`'none'`],
      'form-action': [`'self'`],
      'report-uri': [`https://vinaypuppal.report-uri.com/r/d/csp/reportOnly`],
    },
  },
  {
    name: 'feature-policy',
    value: {
      accelerometer: ["'none'"],
      camera: ["'none'"],
      geolocation: ["'none'"],
      gyroscope: ["'none'"],
      magnetometer: ["'none'"],
      microphone: ["'none'"],
      payment: ["'none'"],
      usb: ["'none'"],
    },
  },
  { name: 'X-Content-Type-Options', value: 'nosniff' },
  { name: 'X-Frame-Options', value: 'DENY' },
  { name: 'X-XSS-Protection', value: '1; mode=block' },
  { name: 'Referrer-Policy', value: 'same-origin' },
];
