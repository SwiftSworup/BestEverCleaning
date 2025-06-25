"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const aboutImages = [
  "/images/a.png",
  "/images/b.png",
  "/images/c.png",
  "/images/d.png",
  "/images/e.png",
  "/images/f.png",
  "/images/g.png",
  "/images/h.png",
]; // Place these in /public

export default function AboutUs() {
  const [current, setCurrent] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutImages.length);
    }, 4500); // 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animation when image changes
    if (imageRef.current) {
      const anim = imageRef.current.animate(
        [
          { opacity: 0.7, scale: 0.95 },
          { opacity: 1, scale: 1 },
        ],
        {
          duration: 600,
          easing: "ease-out",
        }
      );

      return () => anim.cancel();
    }
  }, [current]);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % aboutImages.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  const goToImage = (index) => {
    setCurrent(index);
  };

  return (
    <section className="container py-12 md:pt-32 md:mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-center">
        {/* Image Section - takes 4 columns */}
        <div className="lg:col-span-5 relative mt-10">
          {/* Fixed dimension container - similar to initial example */}
          <div className="w-[280px] h-[240px] sm:w-[400px] sm:h-[320px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[600px] overflow-hidden rounded-[50%] relative z-10 mx-auto">
            <Image 
              ref={imageRef}
              src={aboutImages[current]}
              alt={`About Us Image ${current + 1}`}
              width={600}
              height={500}
              className="w-full h-full object-cover transition-all duration-300"
              priority
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center justify-center w-full gap-4 mt-6">
            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors duration-200 border border-gray-200"
              >
                <ChevronLeft className="w-4 h-4 text-blue-600" />
              </button>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors duration-200 border border-gray-200"
              >
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section - takes 6 columns */}
        <div className="lg:col-span-5">
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 font-montserrat">
              👋 About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              A Decade of Trusted Cleaning
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-dmsans">
              <p>
                BestEver Cleaning Services was built on the foundation of trust,
                reliability, and quality service. With over 10 years of
                experience, we've developed efficient cleaning systems that give
                you better results with less effort—and at a price that won't
                break the bank.
              </p>
              <p>
                We believe in delivering top results while building strong
                relationships with both clients and our staff. Our team is made
                up of verified, experienced professionals who are not only
                skilled at what they do but also genuinely care about making
                your space shine.
              </p>
              <p>
                We treat your property as if it were our own, and we treat our
                team with the respect they deserve—because a happy team means
                happy clients.
              </p>
            </div>
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 font-dmsans">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Verified Staff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
