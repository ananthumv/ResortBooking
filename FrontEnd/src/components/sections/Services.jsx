import React from 'react'
import IconCard from '../ui/IconCard'

export default function Services() {
  const items = [
    { icon: '🏨', title: 'Accommodation', description: 'Seaside rooms, villas, and family suites with modern comforts.' },
    { icon: '🧗', title: 'Adventure Activities', description: 'Kayaking, guided hikes, surfing lessons and eco-tours.' },
    { icon: '🧖‍♀️', title: 'Wellness & Spa', description: 'Massage therapies, yoga decks and holistic wellness programs.' }
  ]

  return (
    <section
      id="services"
      className="min-h-[75vh] flex flex-col justify-center bg-gray-50 py-16"
    >
      <div className="container-wide">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((it) => (
            <IconCard
              key={it.title}
              {...it}
              className="p-10 text-center rounded-xl shadow-xl hover:shadow-2xl transition transform hover:scale-105"
              iconClassName="text-6xl mb-6" 
              titleClassName="text-2xl font-semibold mb-3" 
              descClassName="text-lg text-gray-700" 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
