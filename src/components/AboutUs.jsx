import React from "react";
import video_cocinas1 from "../assets/video_cocinas1.mp4";
import video_cocinas2 from "../assets/video_cocinas2.mp4";
import HOME1 from "../assets/HOME1.png";
import HOME2 from "../assets/HOME2.png";
import HOME3 from "../assets/HOME3.png";
import HOME4 from "../assets/HOME4.png";


const AboutUs = () => {
  const gallery = [
    {
      type: "image",
      src: HOME1,
      alt: "Montaje de cocinas",
    },
    {
      type: "video",
      src: video_cocinas1,
    },
    {
      type: "image",
      src: HOME3,
      alt: "Montaje de cocinas",
    },
    {
      type: "image",
      src: HOME2,
      alt: "Montaje de armario",
    },
    {
      type: "video",
      src: video_cocinas2,
    },
    {
      type: "image",
      src: HOME4,
      alt: "Instalación",
    },
  ];

  return (
    <section id="about-us" className="pt-12 pb-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center-900 mb-7">
            Así Trabajamos
          </h2>

          <p className="text-lg mb-8 text-gray-600">
            Descubre algunos de nuestros trabajos realizados en Madrid.
            Cuidamos cada detalle para ofrecer acabados profesionales y un
            servicio limpio, rápido y de calidad.
          </p>
        </div>

        {/* Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {gallery.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-72 object-cover"
                />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutUs;