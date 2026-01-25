import React from 'react';

const FAQItem = ({ question, answer }) => (
  <div className="border-l-2 border-white/10 pl-6 py-2 hover:border-web-purple transition-colors duration-300">
    <h3 className="text-xl font-bold mb-2 text-gray-200">{question}</h3>
    <p className="text-gray-400 leading-relaxed">{answer}</p>
  </div>
);

const FAQ = () => {
  const faqs = [
    { question: "What industries do you specialize in?", answer: "We work across FinTech, Web3, E-Commerce, and AI sectors, delivering tailored solutions for high-growth businesses." },
    { question: "How long does a typical project take?", answer: "Timelines vary by scope. A branding overhaul might take 4 weeks, while a full-scale platform development can take 3-6 months." },
    { question: "Do you offer post-launch support?", answer: "Absolutely. We provide comprehensive maintenance packages to ensure your digital products remain secure and up-to-date." },
    { question: "Can you work with existing teams?", answer: "Yes, we often embed with internal product teams to accelerate development or provide specialized expertise." }
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
        <div className="grid gap-12">
          {faqs.map((f, i) => (
            <FAQItem key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
