import React from "react";

const EveCollection = () => {
  const products = [
    {
      name: "Earrings",
      price: "$ 49.99 USD",
      image:
        "https://cdn.prod.website-files.com/66e1053e28584d60caa1ac5b/66e10db5f2a621df65d957c2_8sik1FvspOgcNwzDz5Fo9KQqoVM%20(1).avif",
    },
    {
      name: "Ring",
      price: "$ 79.99 USD",
      image:
        "https://cdn.prod.website-files.com/66e1053e28584d60caa1ac5b/66e1267ff4bdb5e574e45946_1.avif",
    },
    {
      name: "Watch",
      price: "$ 159.99 USD",
      image:
        "https://cdn.prod.website-files.com/66e1053e28584d60caa1ac5b/66e12ed178cb12bac545a8fd_4.webp",
    },
    {
      name: "Bracelet",
      price: "$ 89.99 USD",
      image:
        "https://cdn.prod.website-files.com/66e1053e28584d60caa1ac5b/66e12298a378d84545025784_d.avif",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/66d5c8a0f16078270af4fa77/66d5c8b8b23068f514514613_Image-38.jpg"
            alt="Eve Collection Model"
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-6 left-6 bg-black text-white px-6 py-2 text-sm font-semibold tracking-widest">
            LIMITED STOCK
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            EVE Collection{" "}
            <span className="text-gray-400 italic text-lg">by Rolliage.</span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-snug mb-10 max-w-2xl">
            Embrace the enchanting allure of the Eve Collection, a limited edition jewelry line
            that intertwines the graceful symbolism of the divine angels with a mythical essence.
          </p>

          {/* Grid of Product Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-sm p-4 text-center h-[220px] flex flex-col justify-between"
              >
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-[100px] w-auto object-contain mx-auto"
                  />
                </div>
                <div>
                  <h4 className="mt-4 font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveCollection;
