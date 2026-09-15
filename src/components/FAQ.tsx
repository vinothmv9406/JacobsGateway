
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import { faqItems } from '../data/faqData';

const FAQ = () => {
  return (
    <section id="faq" className="py-28 bg-jg-porcelain">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-14">
          <div className="eyebrow mb-4">Common questions</div>
          <h2 className="text-3xl md:text-[2.6rem] font-semibold mb-5 text-jg-ink leading-tight">
            Business setup in Dubai, answered honestly
          </h2>
          <p className="text-jg-ink-soft leading-relaxed">
            Costs, timelines, ownership rules, corporate tax, visas. The questions founders
            ask us most, with the caveats left in.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-jg-ink/10 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="py-6 text-jg-ink hover:text-jg-gold-deep hover:no-underline text-left text-lg md:text-[1.22rem] font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-7 pr-6 text-jg-ink-soft leading-relaxed text-[0.96rem]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
