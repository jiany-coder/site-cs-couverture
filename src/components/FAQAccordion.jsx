import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

export default function FAQAccordion({ items }) {
  return (
    <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#D9E0EA]">
          <AccordionTrigger
            className="text-left py-6 font-serif text-xl md:text-2xl text-[#0B1220] hover:text-[#1F2D5A] hover:no-underline"
            data-testid={`faq-trigger-${i}`}
          >
            {f.q}
          </AccordionTrigger>
          <AccordionContent
            forceMount
            className="text-base font-sans text-[#475569] leading-relaxed pb-6"
            data-testid={`faq-content-${i}`}
          >
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
