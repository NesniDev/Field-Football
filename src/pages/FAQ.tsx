import { faqs } from "@/lib/faqs";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export const FAQ = () => {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (title: string) => {
    setOpen(prev => (prev === title ? null : title));
  };

  return (
    <section className="max-w-2xl mx-auto ">
      <h1 className="text-4xl text-center font-bold my-7">Preguntas Frecuentes</h1>

      <div className="flex flex-col gap-2 mb-10">
        {faqs.map((faq) => (
          <div
            key={faq.title}
            className="rounded-lg bg-slate-900/70 p-4"
          >
            <button
              className="w-full cursor-pointer list-none font-bold text-white"
              onClick={() => toggle(faq.title)}
            >
              <div className="flex items-center justify-between">
                <span className="font-orbitron">{faq.title}</span>
                <FaChevronUp
                  className={`${open === faq.title ? "rotate-180" : ""} transition-transform duration-300`}
                />
              </div>
            </button>

            {open === faq.title && (
              <p className="mt-2 text-white/60">{faq.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
