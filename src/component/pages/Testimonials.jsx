import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importation des images locales
import image1 from "../images/testimonialIG/Z1.png";
import image2 from "../images/testimonialIG/Z2.png";// Correction de l'emplacement de l'image

const testimonials = [
  {
    name: 'Manar',
    text: ' "Je suis extrêmement satisfait du service du Cabinet Vétérinaire Animax. Le personnel est toujours chaleureux et professionnel. Ils répondent à toutes mes questions avec patience et me conseillent parfaitement sur les soins pour mes animaux. Je recommande vivement ce cabinet à tous mes amis et ma famille "',
    image: image1 // Utilisation de l'image importée
  },
  {
    name: 'Mariam',
    text: ' "Le Cabinet Vétérinaire Animax est exceptionnel. Chaque visite est une expérience positive grâce à leur équipe attentive et bienveillante. Ils prennent le temps d expliquer les traitements et montrent un véritable amour pour les animaux. Je n hésite pas à les recommander à tous ceux qui cherchent des soins de qualité pour leurs compagnons !"',
    image: image2 // Utilisation de l'image importée
  },
  // Ajoutez plus de témoignages ici
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold text-center mb-8"> . </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="max-w-md mx-auto bg-tilexind-green rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-tilexind-green-dark font-semibold">{testimonial.name}</div>
                  <p className="mt-2 text-tilexind-green-dark">{testimonial.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
