import React from 'react';
import gallery1 from '../../assets/resort_1.webp';
import gallery2 from '../../assets/resort_2.webp';
import gallery3 from '../../assets/resort_3.webp';

export default function Gallery() {
  const images = [gallery1, gallery2, gallery3];

  return (
    <section
      id="gallery"
      className="min-h-[75vh] flex flex-col justify-center bg-gray-100 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 max-w-xs w-full"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
