import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { body, display, mono } from './fonts';
import { themeScript } from './themeScript';
import { withBase } from '@/lib/basePath';
import { ProgressProvider } from '@/components/ProgressProvider';

export const metadata: Metadata = {
  title: { default: 'Arabic Ladder', template: '%s · Arabic Ladder' },
  description: 'Kursus bahasa Arab bertingkat untuk penutur bahasa Indonesia, dari huruf pertama. Pelan-pelan, tapi naik.',
  manifest: withBase('/manifest.webmanifest'),
  icons: { icon: withBase('/icons/icon.svg'), apple: withBase('/icons/icon-192.png') },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F2E9' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1914' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}
