import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFAQ() {
  return (
    <div>
      <p className="pt-24 md:pt-52 text-center z-10 m-auto text-4xl lg:text-4xl lg:text-5xl font-[400] leading-normal max-w-lg ">
        Questions & Answers{" "}
      </p>
      <Accordion className="mt-12 pb-24 max-w-[80vw] md:max-w-xl m-auto" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
          className="text-sm md:text-md lg:text-lg font-[500]">Is using this app safe?</AccordionTrigger>
          <AccordionContent
          className="text-sm md:text-md lg:text-lg">
            Yes! We don{`'`}t ask you to log-in to your Spotify account, so all your data is safe, moreover, anything you recieve as recommendations is not seen by us, as it{`'`}s sent directly from the Spotify API to you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger
          className="text-sm md:text-md lg:text-lg font-[500]">Can I contribute?</AccordionTrigger>
          <AccordionContent
          className="text-sm md:text-md lg:text-lg">
            Of course! Please take a look at the public repository on <a className="underline" target="_blank" href="https://github.com/krzysztofzimnicki/spotify-recommendations">Github </a> to learn more.
          </AccordionContent>
        </AccordionItem>
        <p className="mt-6 text-sm">Have more questions? Feel free to reach out <a className="underline" href="mailto:hi@krzysztofzimnicki.com">hi@krzysztofzimnicki.com</a>.</p>
      </Accordion>
    </div>
  );
}
