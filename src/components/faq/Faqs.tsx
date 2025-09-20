import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do payment plans for off-plan properties work in Dubai?",
    answer:
      "Dubai’s off-plan market is known for its flexible and investor-friendly payment plans. Typically, buyers pay a small down payment (usually 10–20%) at booking, followed by staged payments during construction. Some developers even offer post-handover payment plans, allowing buyers to continue paying after they take possession of the property. These structured plans make off-plan investing accessible and manageable. Each project may differ, so it’s important to review the payment schedule and choose a plan that suits your budget and goals.",
  },
  {
    question: "Can foreigners buy off-plan properties in Dubai?",
    answer:
      "Foreign nationals can legally buy off-plan properties in Dubai’s designated freehold areas. These zones allow full ownership of the property and land, giving buyers the same rights as UAE citizens. Dubai’s property market is very open to international investors, and many developers actively market off-plan projects to global buyers. Foreigners can also apply for mortgages and, in some cases, residency visas linked to property investment, making Dubai an attractive destination for long-term investment and relocation.",
  },
  {
    question: "What are the steps involved in buying an off-plan property in Dubai?",
    answer:
      "The process starts with selecting a trusted developer and choosing a project that fits your goals. After deciding on a unit, you’ll sign a Sales Purchase Agreement (SPA) and pay the initial deposit. Payments are made in stages, often linked to construction progress. All transactions go through a registered escrow account for added security. Once the project is completed and inspected, the developer hands over the unit. Registration with the Dubai Land Department (DLD) finalizes your ownership.",
  },
  {
    question: "Can I sell my off-plan property before it is completed?",
    answer:
      "Yes, you can sell (or “assign”) your off-plan unit before handover, subject to the developer’s terms. Most developers allow resale after a certain percentage of the property has been paid—commonly 30–40%. This is known as a secondary market transfer. The new buyer takes over the remaining payment plan. It’s important to factor in any transfer fees or developer approvals required when planning a resale.",
  },
  {
    question: "What are the requirements for foreigners to buy property in Dubai?",
    answer:
      "Foreigners can buy property in designated freehold areas in Dubai. You need a valid passport and proof of funds. No residency visa is required. The process includes signing a sales agreement, paying a deposit, and registering with the Dubai Land Department. It’s a safe and transparent process for investors.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pb-10 py-8 md:py-12 grid md:grid-cols-2 gap-6 sm:gap-10">
      {/* Left Side */}
      <div>
        <div className="flex items-center gap-2 mb-4">
            <span className="text-[#1A3E72] text-xl">🏠</span>
            <p className="uppercase tracking-wide text-sm font-semibold text-gray-600">
              Frequently Asked Questions (FAQs)
            </p>
          </div>
        <h2 className="text-3xl font-bold mb-4 text-[#1A3E72]">
          Real Estate Made Easy 
        </h2>
        <p className="text-gray-600 mb-6">
          Have questions about Dubai’s off-plan market? From booking and payment plans to timelines and legal tips, our FAQ section gives you straightforward answers for a smooth investment journey.

        </p>
        <button className="inline-flex items-center cursor-pointer text-black font-medium hover:text-[#1A3E72] transition">
          Consult Now <span className="ml-2">➝</span>
        </button>
      </div>

      {/* Right Side */}
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-1 md:py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left font-medium text-md sm:text-lg"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
