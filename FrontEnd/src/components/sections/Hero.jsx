import React from 'react'
import Button from '../ui/Button'

const HERO_IMG = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=60'

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[60vh] md:h-[72vh] bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="h-full hero-overlay flex items-center">
          <div className="container-wide text-white">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold">Ocean Breeze Resort</h2>
              <p className="mt-4 text-lg md:text-xl">Relax • Recharge • Rediscover — Beachfront luxury with nature-first experiences.</p>
              <div className="mt-6 flex gap-4">
                {/* Primary Button */}
                <Button
                  className="px-6 py-3 bg-transparent text-primary font-semibold border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition"
                  onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>

                {/* Ghost / Secondary Button */}
                <Button
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition"
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Services
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
