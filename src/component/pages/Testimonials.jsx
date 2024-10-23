import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Importation des images locales
import image1 from "../images/acf.webp";
import image2 from "../images/giz.webp";
import image3 from "../images/DRSVGAO.webp";
import image4 from "../images/cicr.webp";
import image5 from "../images/caritas.webp";
import image6 from "../images/praps.jpeg";
import image7 from "../images/ddrg.jpg";
import image8 from "../images/lcv.png";


const testimonials = [
  {
    name: 'ACF',
    text: ' "Notre collaboration avec Croix bleue a été exceptionnelle. Leur équipe est toujours disponible et prête à répondre à nos besoins. Nous recommandons vivement leurs services."',
    image: image1 // Utilisation de l'image importée
  },
  {
    name: 'GIZ',
    text: ' "Nous sommes extrêmement satisfaits des services fournis par Croix bleue. Leur professionnalisme et leur expertise sont incomparables. Nous les recommandons sans hésitation."',
    image: image2 // Utilisation de l'image importée
  },
  // Ajoutez plus de témoignages ici
  {
    name: 'DRSV-GAO',
    text: ' "Travailler avec Croix bleue a été une expérience très positive. Leur équipe est compétente et toujours prête à aider. Nous les recommandons vivement."',
    image: image3 // Utilisation de l'image importée
  },
  {
    name: 'CICR',
    text: ' "L\'équipe de Croix bleue est exceptionnelle. Leur dévouement et leur expertise ont grandement contribué à notre succès. Nous les recommandons fortement."',
    image: image4 // Utilisation de l'image importée
  },
  {
    name: 'CARITAS',
    text: ' "Nous avons eu une excellente expérience avec Croix bleue. Leur équipe est professionnelle et toujours prête à répondre à nos besoins. Nous les recommandons vivement."',
    image: image5 // Utilisation de l'image importée
  },
  {
    name: 'PRAPS',
    text: ' "Le service fourni par Croix bleue est exceptionnel. Leur équipe est compétente et toujours prête à aider. Nous les recommandons sans réserve."',
    image: image6 // Utilisation de l'image importée
  },
  {
    name: 'DDRG',
    text: ' "Nous sommes très satisfaits des services de Croix bleue. Leur équipe est professionnelle et toujours disponible. Nous les recommandons vivement."',
    image: image7 // Utilisation de l'image importée
  },
  {
    name: 'LCV',
    text: ' "Travailler avec Croix bleue a été une expérience très positive. Leur équipe est compétente et toujours prête à aider. Nous les recommandons sans hésitation."',
    image: image8 // Utilisation de l'image importée
  },
];

const Testimonials = () => {
  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="py-12 bg-gray-100 "id="Temoignages">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-gray-800">Témoignages</h2>
      <Slider {...settings} className='max-w-screen-xl mx-auto'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-64 w-full object-cover md:h-full md:w-64" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{testimonial.name}</div>
                  <p className="mt-2 text-gray-600">{testimonial.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;