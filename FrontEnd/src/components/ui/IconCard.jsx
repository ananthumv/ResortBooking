import React from 'react'

export default function IconCard({ icon, title, description }) {
  return (
    <div className="p-4 rounded-xl bg-white/80 backdrop-blur border border-gray-100 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-lg">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  )
}
