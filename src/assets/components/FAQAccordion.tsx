import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  { question: "Como faço para pedir o meu Teu Card", answer: "Basta escolher o plano que mais combina com você e garantir o seu Teu Card. É rápido, é fácil, e é seu." },
  { question: "Quais benefícios eu tenho com o Teu Card?", answer: "Você vai ter acesso a descontos exclusivos, ofertas de marcas que você adora, e ainda muita praticidade. O que é seu merece ser aproveitado ao máximo!" },
  { question: "Tem taxas escondidas no Teu Card?", answer: "Não mesmo! O Teu Card é para quem detesta surpresas. O que você paga é o que você escolhe – simples assim." },
];

const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleAnswer = (index: number) => {
      setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
    };
  
    return (
      <div className="space-y-4 py-12 ">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <div
              className={`cursor-pointer text-xl font-semibold ${openIndex === index ? 'text-primary' : 'text-white'}`} 
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            {openIndex === index && (
              <div className="text-white mt-2">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default FAQAccordion;