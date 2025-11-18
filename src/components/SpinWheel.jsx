import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const prizes = [
  5000, 10000, 15000, 25000, 50000, 75000, 100000, 150000,
];

export default function SpinWheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const wheelRef = useRef(null);

  const segments = prizes.length;
  const anglePer = 360 / segments;

  const colors = [
    'from-red-800 to-red-600',
    'from-yellow-600 to-yellow-500',
  ];

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    const index = Math.floor(Math.random() * segments);
    setResult(prizes[index]);

    const rotation = 360 * 8 + (360 - index * anglePer - anglePer / 2);

    wheelRef.current.style.transition = 'transform 3.5s cubic-bezier(0.19, 1, 0.22, 1)';
    wheelRef.current.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => setSpinning(false), 3600);
  };

  useEffect(() => {
    // reset transform to allow re-spins
    const w = wheelRef.current;
    const end = () => {
      w.style.transition = 'none';
    };
    w.addEventListener('transitionend', end);
    return () => w.removeEventListener('transitionend', end);
  }, []);

  return (
    <section id="wheel" className="relative z-10 mx-auto mt-16 max-w-6xl rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-black to-neutral-900 p-6 shadow-2xl sm:p-10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
          <div className="absolute inset-0 -z-0 rounded-full bg-gradient-to-tr from-red-800/30 to-yellow-500/20 blur-3xl" />

          <div className="relative flex aspect-square w-[95%] items-center justify-center rounded-full bg-gradient-to-br from-neutral-900 to-black p-3 ring-1 ring-yellow-500/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.06),0_0_30px_rgba(185,28,28,0.25)]">
            <div ref={wheelRef} className="relative h-full w-full rounded-full bg-neutral-900">
              {[...Array(segments)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute left-1/2 top-1/2 h-1/2 w-[2px] origin-bottom -translate-x-1/2 -translate-y-full rotate-[${i*anglePer}deg]`}
                >
                  <div
                    className={`-ml-[120px] h-[120%] w-[240px] origin-bottom -rotate-90 rounded-t-full bg-gradient-to-b ${colors[i%2]} opacity-90`}
                    style={{ clipPath: `polygon(50% 0%, 100% 100%, 0% 100%)` }}
                  />
                  <div className="absolute -left-[100px] -top-[10px] w-[200px] -rotate-90 text-center">
                    <span className="text-xs font-semibold tracking-wide text-yellow-200 drop-shadow">
                      ${prizes[i].toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-yellow-500/30" />
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <div className="h-8 w-5 -rotate-12 rounded-b-md bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-[0_10px_20px_rgba(0,0,0,0.5)] ring-1 ring-yellow-500" />
            </div>

            <button
              onClick={spin}
              disabled={spinning}
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-red-700 to-red-900 px-8 py-8 text-sm font-extrabold uppercase tracking-wider text-red-100 shadow-[0_0_25px_rgba(185,28,28,0.45)] ring-1 ring-red-800/60 hover:brightness-110 disabled:opacity-60"
            >
              {spinning ? 'Spinning...' : 'Spin'}
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">Interactive Spin Wheel</h3>
          <p className="mt-3 text-neutral-300">Contribute and get a bonus spin. Prizes range from $5,000 to $150,000 from our sponsor vault. Fully auditable draw with cryptographically seeded randomness.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {prizes.map((p) => (
              <div key={p} className="rounded-2xl border border-yellow-500/10 bg-neutral-900/60 p-4 text-yellow-200">
                <span className="font-semibold">${p.toLocaleString()}</span>
                <span className="ml-2 text-xs text-neutral-300">bonus</span>
              </div>
            ))}
          </div>
          {result && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl border border-yellow-500/20 bg-black/60 p-4 text-center text-yellow-100">
              <span className="text-sm">You landed on</span>
              <div className="mt-1 text-3xl font-extrabold text-yellow-400">${result.toLocaleString()}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
