import { useEffect, useRef } from "react";

const defaultTestimonials = [
  {
    name: "Dinesh Singh",
    date: "15/04/2021",
    rating: '/images/herosection/testinomials/RatingIcon.svg',
    image: '/images/herosection/testinomials/profileIcon.svg',
    googleImage: '/images/herosection/testinomials/Google_Icon.svg',
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    name: "John Doe",
    date: "15/04/2021",
    rating: '/images/herosection/testinomials/RatingIcon.svg',
    image: '/images/herosection/testinomials/profileIcon.svg',
    googleImage: '/images/herosection/testinomials/Google_Icon.svg',
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    name: "Jane Smith",
    date: "15/04/2021",
    rating: '/images/herosection/testinomials/RatingIcon.svg',
    googleImage: '/images/herosection/testinomials/Google_Icon.svg',
    image: '/images/herosection/testinomials/profileIcon.svg',
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
];

const TestimonialSlider = ({ serviceData, appointmentReviews }) => {
  const cardRefs = useRef([]);
  const testimonials =
    serviceData?.reviews || appointmentReviews || defaultTestimonials;

  useEffect(() => {
    const items = cardRefs.current;
    const offsetX = 50; // Horizontal offset (right)
    const offsetY = -30; // Vertical offset (up)
    const scaleFactor = 0.05; // Scale down factor

    items.forEach((item, index) => {
      item.style.transform = `translate(${offsetX * index}px, ${
        -offsetY * index
      }px) scale(${1 - scaleFactor * index})`;
      item.style.zIndex = items.length - index;
      item.style.opacity = "0.5";
    });

    const moveToNext = () => {
      const firstItem = items[0];
      firstItem.style.transition = "transform 0.6s, opacity 0.6s";
      firstItem.style.transform = `translate(${offsetX * items.length}px, ${
        offsetY * items.length
      }px) scale(0.8)`;
      firstItem.style.opacity = "0.5";

      setTimeout(() => {
        firstItem.style.transition = "none";
        firstItem.style.transform = `translate(0px, 0px) scale(1)`;
        firstItem.style.opacity = "1";
        firstItem.style.zIndex = items.length;

        items.push(items.shift());

        items.forEach((item, index) => {
          item.style.transition = "transform 0.6s, opacity 0.6s";
          item.style.transform = `translate(${offsetX * index}px, ${
            -offsetY * index
          }px) scale(${1 - scaleFactor * index})`;
          item.style.zIndex = items.length - index;
          item.style.opacity = 1;
        });
      }, 600);
    };

    const interval = setInterval(moveToNext, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="outerContainer overflow-hidden"
      style={{
        backgroundImage: `url('/images/herosection/testinomials/bgTestimonal.svg')`,
        backgroundColor: "var(--primary)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-12 px-20 flex justify-between">
        <div sm={6} className="w-[40%]">
          <h5 className="text-secondary mt-10 text-xl font-jost font-bold">
            TESTIMONIALS
          </h5>
          <div className="text-secondary mt-5 leading-snug text-5xl font-bold font-jost">
            What People Say
            <br /> About Us
          </div>
        </div>
        <div
          lg={6}
          className="flex justify-center pt-5 pb-12 xsm:pt-10 sm:pt-16 w-[60%]"
        >
          <div className="relative w-[80%] xsm:w-[160px] sm:w-[300px] md:w-[400px] h-60 xsm:h-[21rem]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute inset-0 transform bg-white p-6 rounded-lg shadow-lg transition-opacity duration-500 xsm:p-2 sm:p-4 md:p-2"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="flex items-center space-x-4 xsm:space-x-1 xsm:mt-6 sm:mt-4 md:mt-2">
                  <img
                    src={testimonial.imageUrl || '/images/herosection/testinomials/profileIcon.svg'}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-white xsm:w-12 xsm:h-12"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h3 className="font-bold text-lg xsm:text-[12px]">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm xsm:text-[8px]">
                      {testimonial.date}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <img
                      src={testimonial.googleImage || '/images/herosection/testinomials/Google_Icon.svg'}
                      alt="Google"
                      className="w-8 h-8 rounded-full border-2 border-white xsm:w-6 xsm:h-6 sm:w-7 sm:h-7"
                    />
                  </div>
                </div>
                <div className="-mt-4 xsm:pt-0">
                  <img src={'/images/herosection/testinomials/RatingIcon.svg'} alt="Rating" className="w-16 h-16" />
                  <p className="text-gray-700 italic mb-4 px-2 xsm:text-[14px] -mt-4">
                    {testimonial.text || testimonial.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
