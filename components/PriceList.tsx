import { pricingPackage } from "@/constants";

const PriceList: React.FC = () => {
  if (!pricingPackage || pricingPackage.length === 0) {
    return (
      <section id="pricingPlant" className="bg-gray-900 rounded-2xl py-12 text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">Pricing Plans</h2>
        <p className="mt-4 text-xl text-gray-400">No pricing plans available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="pricingPlant" className="bg-gray-900 rounded-2xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Pricing Plans</h2>
          <p className="mt-4 text-xl text-gray-400">Simple, transparent pricing for your business needs.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPackage.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 flex flex-col rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <div className="mb-8 flex gap-3">
                <div className="w-24 h-24 bg-green-400 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-green-300 rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-14 h-14 bg-green-300 rounded-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.package_name}</h3>
                  <p className="mt-4 text-gray-400">{item.package_title}</p>
                </div>
              </div>
              <div className="mb-8">
                {item.package_price && (
                  <div className="flex items-center space-x-2">
                    <span className="text-4xl font-medium text-gray-400 line-through text-center">
                      Rp. {item.package_price.toLocaleString("id-ID")}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-8">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-extrabold text-white">
                    Rp. {item.package_price_discount.toLocaleString("id-ID")}
                  </span>
                  <span className="text-xl font-medium text-gray-400">/mo</span>
                </div>
              </div>
              <ul className="mb-8 space-y-4 text-gray-400">
                {Object.entries(item.package_features).map(([key, value]) => (
                  <li key={key} className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`/register?product_id=${item.id}`}
                className="mt-auto block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Subscribe Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceList;