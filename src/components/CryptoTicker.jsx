import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Bitcoin', src: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=030', color: '#F7931A' },
  { name: 'Ethereum', src: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=030', color: '#627EEA' },
  { name: 'Solana', src: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=030', color: '#00FFA3' },
  { name: 'Tether', src: 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=030', color: '#26A17B' },
  { name: 'USD Coin', src: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=030', color: '#2775CA' },
  { name: 'Ripple', src: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=030', color: '#25A768' },
];

export default function CryptoTicker() {
  return (
    <div className="relative z-10 mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl border border-yellow-500/10 bg-gradient-to-b from-neutral-900/70 to-black/70 p-4">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
        className="flex gap-10 opacity-90"
      >
        {[...logos, ...logos].map((l, i) => (
          <div key={i} className="flex items-center gap-3">
            <img src={l.src} alt={l.name} className="h-8 w-8" />
            <span className="text-sm text-neutral-300">{l.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
