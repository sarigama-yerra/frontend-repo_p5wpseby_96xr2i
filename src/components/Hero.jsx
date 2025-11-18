import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(185,28,28,0.25),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.2),transparent_40%)]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block rounded-full border border-red-800/60 bg-red-900/30 px-4 py-1 text-xs tracking-widest text-red-200/90 backdrop-blur">
              PREMIUM CRYPTO CASINO FUNDRAISING
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Elevate Your Raise with Fortune & Finance
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-300 sm:text-lg">
              A luxury, high-velocity platform blending on-chain transparency with casino-grade excitement. Dark red, black, and gold — engineered to inspire trust and spark momentum.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#progress" className="rounded-xl bg-gradient-to-br from-red-700 to-red-900 px-6 py-3 text-sm font-semibold text-red-100 shadow-[0_0_30px_rgba(185,28,28,0.35)] ring-1 ring-red-800/60 transition hover:brightness-110">
                View Progress
              </a>
              <a href="#wheel" className="rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(234,179,8,0.35)] ring-1 ring-yellow-500/40 transition hover:brightness-110">
                Spin & Win
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
