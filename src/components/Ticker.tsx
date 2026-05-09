'use client'

const items = [
  '⚖ Criminal Law',
  '🏛 High Court',
  '📋 Civil Disputes',
  '🏢 Corporate Law',
  '💑 Family Matters',
  '🛡 IPR & Patents',
  '💻 Cyber Law',
  '🏠 Property Law',
  '⚖ Supreme Court',
  '📱 Online Consultancy',
  '🤝 1000+ Advocates',
  '44+ Years Experience',
]

export default function Ticker() {
  return (
    <div className="bg-[#0f1628] border-y border-[#c9a84c]/10 py-4 overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-8">
              <span className="font-caps text-[#c9a84c]/60 text-xs tracking-widest uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#c9a84c]/30 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
