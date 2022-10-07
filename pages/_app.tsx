import type { AppProps } from 'next/app';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#0f0111] text-white font-Nunito">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
