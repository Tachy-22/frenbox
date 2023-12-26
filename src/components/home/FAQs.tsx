import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionData = [
  {
    value: "item-1",
    question: "What is Frenbox?",
    answer:
      "Frenbox is a cloud storage platform that allows users to search for and access each other's content (privacy rules are in place). Users can also, on the side, restrict access to their files such that only users who pay can access them (monetization).",
  },
  {
    value: "item-2",
    question: "How does Frenbox ensure the security of my content?",
    answer:
      "By default, your backed up files are private to only you. You can choose to make them available to anyone (Public) or some select few (Restricted).",
  },
  {
    value: "item-3",
    question: "Can I monetize various types of content on Frenbox?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-4",
    question: "What payment methods are supported for monetization?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },

  {
    value: "item-5",
    question: "Is Frenbox only for content creators?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-6",
    question: "Is Frenbox easy to use for beginners?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-7",
    question: "How can I join Frenbox and connect with other creators?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

const FAQs = () => {
  return (
    <div className="grid grid-cols-1 px-[2rem] xl:px-[1rem] md:grid-cols-2 gap-6 py-[4rem] max-w-7xl w-full">
      <h3 className="capitalist text-4xl">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="w-full">
        {AccordionData.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
