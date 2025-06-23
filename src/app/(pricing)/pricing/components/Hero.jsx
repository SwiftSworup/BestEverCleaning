"use client";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 19,
    features: [
      "General cleaning of all rooms",
      "Dusting furniture and surfaces",
      "Vacuuming carpets and rugs",
    ],
    featured: false,
  },
  {
    name: "Essential",
    price: 59,
    features: [
      "Everything in Basic Clean",
      "Inside appliance cleaning",
      "Baseboards and window sills",
      "Light fixture cleaning",
      "Cabinet front cleaning",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: 119,
    features: [
      "Everything in Deep Clean",
      "Interior window cleaning",
      "Refrigerator deep clean",
      "Oven interior cleaning",
    ],
    featured: false,
  },
];

export default function PricingTable() {
  return (
    <div className="relative pt-32 ">
      {/* Top Gradient Section */}
      <div
        className="bg-[linear-gradient(135deg,_#3B82F6_0%,_#54AADE_50%,_#1E40AF_100%)]
 h-[630px] w-full container text-white text-center"
      >
        <div className="pt-20 px-4">
          <h2 className="text-4xl mb-2 lg:text-[64px] font-[700] font-montserrat leading-[60px]">
            Pricing plans
          </h2>
          <p className="text-2xl mb-4 lg:text-[64px] font-[700] font-montserrat leading-[77px]">
            for cleaning services of all sizes
          </p>
          <p className="max-w-3xl  mx-auto text-xl text-blue-100">
            Choose the perfect cleaning plan for your home. Our experienced professionals use eco-friendly products and guarantee 100% satisfaction with every service.
          
          </p>
        </div>
      </div>

      <div className="relative w-full -top-[200px] px-6">
        <div className="max-w-6xl shadow-2xl bg-white mx-auto flex flex-col md:flex-row justify-center items-end gap-6 rounded-xl">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white text-gray-900 rounded-xl shadow-lg transition-all duration-300 flex-1 max-w-sm mx-auto ${
                plan.featured
                  ? "scale-105 z-10 border-2 border-blue-600 -mt-12"
                  : "mt-6"
              }`}
            >
              {plan.featured && (
                <div className="bg-blue-600 text-white text-lg font-poppins font-semibold py-3 rounded-t-md text-center">
                  Most popular ✨
                </div>
              )}
              <div className="px-6 pt-6 pb-4 text-center">
                <h3 className="text-3xl text-[#323232] font-semibold mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center text-5xl text-[#323232] font-bold mb-1">
                  ${plan.price}
                  <p className="text-sm text-gray-500">/month</p>
                </div>
              </div>
              <div className="border-t px-6 py-4">
                <ul className="space-y-3 text-base text-[#636363]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-blue-600 w-5 h-5 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-6 py-3 rounded-md font-semibold transition ${
                    plan.featured
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="relative h-[400px]">

      </div> */}
    </div>
  );
}
