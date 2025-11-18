import { motion, AnimatePresence } from 'framer-motion';

const target = 1260000;
const current = 377500;
const percent = Math.min(100, Math.round((current / target) * 100));

export default function Progress() {
  return (
    <section id="progress" className="relative z-10 mx-auto -mt-16 max-w-6xl rounded-3xl border border-red-800/30 bg-gradient-to-b from-neutral-900/70 to-black/70 p-6 shadow-2xl backdrop-blur sm:p-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Fundraising Progress</h2>
          <p className="mt-2 text-sm text-neutral-300">Real-time momentum towards the raise. Backers unlock premium rewards and bonus spins as milestones hit.</p>
          <div className="mt-6 rounded-2xl bg-neutral-800/60 p-4">
            <div className="flex items-end justify-between text-neutral-300">
              <span className="text-sm">${current.toLocaleString()}</span>
              <span className="text-xs opacity-70">of ${target.toLocaleString()}</span>
            </div>
            <div className="mt-3 h-4 w-full rounded-full bg-neutral-700/60">
              <motion.div
                className="h-4 rounded-full bg-gradient-to-r from-red-700 via-red-600 to-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.35)]"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/20 text-xs font-semibold text-yellow-200 ring-1 ring-yellow-400/40">{percent}%</span>
                <span className="text-xs opacity-80">complete</span>
              </div>
              <span className="text-xs">ETA: Q1 Launch</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
            {[
              { label: 'Backers', value: '1,248' },
              { label: 'Avg. Ticket', value: '$3,200' },
              { label: 'Bonus Pool', value: '$250,000' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-yellow-500/10 bg-neutral-900/60 p-4 text-neutral-300">
                <div className="text-lg font-bold text-white">{item.value}</div>
                <div className="text-xs opacity-70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-neutral-900 to-black p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-white">Why this raise?</h3>
            <ul className="mt-4 grid gap-3 text-sm text-neutral-300">
              {[
                'Provably fair games, on-chain proofs',
                'Liquidity-backed reward mechanics',
                'Multi-chain deposits with audited custody',
                'Institutional-grade KYC/AML partners',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-red-600 to-yellow-400 shadow-[0_0_12px_rgba(234,179,8,0.5)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
