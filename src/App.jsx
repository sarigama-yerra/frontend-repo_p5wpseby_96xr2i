import Hero from './components/Hero';
import Progress from './components/Progress';
import SpinWheel from './components/SpinWheel';
import About from './components/About';
import CryptoTicker from './components/CryptoTicker';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-950 to-black">
      {/* Floating glow background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(185,28,28,0.15),transparent_30%),radial-gradient(circle_at_80%_90%,rgba(234,179,8,0.12),transparent_30%)]" />

      <Hero />
      <Progress />
      <SpinWheel />
      <CryptoTicker />
      <About />

      <footer className="relative z-10 mx-auto my-20 max-w-6xl rounded-2xl border border-neutral-800 bg-black/60 p-6 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Premium Crypto Casino Fundraising • Dark Red • Black • Gold
      </footer>
    </div>
  );
}

export default App;
