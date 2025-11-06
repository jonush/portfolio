import type { Metadata } from 'next';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PixelBlast from '../components/PixelBlast';

export const metadata: Metadata = {
  title: 'Jonathan Hsu - Product Designer',
  description:
    'Product designer who builds both products and processes from the ground up.',
  openGraph: {
    title: 'Jonathan Hsu - Product Designer',
    description:
      'Product designer who builds both products and processes from the ground up.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen px-6'>
        <div className='fixed inset-0 z-0'>
          <PixelBlast
            variant='square'
            pixelSize={4}
            color='#999999'
            patternScale={1.1}
            patternDensity={1.1}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1}
            speed={0.2}
            edgeFade={0.0}
            transparent
          />
        </div>
        <div className='container-narrow content-box border-t-0 border-b-0 min-h-screen flex flex-col relative z-10 bg-gray-900/95'>
          <Navigation />
          <main className='flex-1 flex flex-col'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
