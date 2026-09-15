import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section id="testimonials" className="py-28 bg-jg-porcelain">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="eyebrow eyebrow-center mb-4">In their words</div>
          <h2 className="text-3xl md:text-[2.6rem] font-semibold mb-5 text-jg-ink leading-tight">
            What founders say
          </h2>
          <p className="text-jg-ink-soft leading-relaxed">
            Getting the structure right at the outset is the difference between trading in
            week two and restructuring in year two.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-2 sm:px-4 py-2">
                  <div className="bg-jg-card rounded-sm p-8 md:p-12 border border-jg-ink/[0.06] shadow-[0_40px_80px_-40px_rgba(10,18,32,0.4)]">
                    <div className="flex mb-7 text-jg-gold tracking-[3px]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-jg-gold text-jg-gold" />
                      ))}
                    </div>
                    <p className="text-xl md:text-[1.75rem] font-normal leading-[1.45] text-jg-ink mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-circle object-cover border-2 border-jg-brass"
                      />
                      <div className="ml-4">
                        <p className="font-semibold text-jg-ink">{testimonial.author}</p>
                        <p className="text-sm text-jg-ink-soft">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No prev/next buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-pill transition-all duration-300 ${currentIndex === index ? 'w-8 bg-jg-gold' : 'w-2 bg-jg-ink/20'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
