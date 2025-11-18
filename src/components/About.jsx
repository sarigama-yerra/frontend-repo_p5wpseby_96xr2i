import { motion } from 'framer-motion';

const features = [
  {
    title: 'On-Chain Fairness',
    desc: 'All game outcomes are provably fair with public seeds and proofs.',
  },
  {
    title: 'Institutional Security',
    desc: 'Custody and compliance with top-tier partners across jurisdictions.',
  },
  {
    title: 'Multi-Chain Deposits',
    desc: 'BTC, ETH, SOL, USDT, USDC and more via audited bridges and oracles.',
  },
  {
    title: 'Luxury Experience',
    desc: 'Dark, cinematic UI with gold accents, fluid motion, and tactile feedback.',
  },
];

export default function About() {
  return (
    <section className="relative z-10 mx-auto mt-16 max-w-6xl rounded-3xl border border-red-800/30 bg-gradient-to-b from-neutral-900/70 to-black/70 p-6 shadow-2xl backdrop-blur sm:p-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">About the Platform</h2>
          <p className="mt-3 text-neutral-300">Built for high‑net‑worth contributors and crypto‑native communities. Every interaction is designed to be cinematic, responsive, and trustworthy.</p>
          <div className="mt-6 grid gap-3">
            {features.map((f) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-yellow-500/10 bg-neutral-900/60 p-4">
                <div className="text-white font-semibold">{f.title}</div>
                <div className="text-sm text-neutral-300">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Whitepaper</h3>
          <div className="mt-3 overflow-hidden rounded-2xl border border-yellow-500/20 bg-black/50 p-4 text-sm text-neutral-300">
            <p>
              Our whitepaper details tokenomics, fairness proofs, treasury management, and risk disclosures. Download the latest version below.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a className="rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 px-4 py-2 text-sm font-semibold text-black ring-1 ring-yellow-500/40 hover:brightness-110" href="#">Download PDF</a>
              <a className="rounded-xl bg-gradient-to-br from-red-700 to-red-900 px-4 py-2 text-sm font-semibold text-red-100 ring-1 ring-red-800/60 hover:brightness-110" href="#">View Litepaper</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
