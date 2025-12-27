import img1 from "./assets/solar-person.png";
import img2 from "./assets/wind-person.png";
import img3 from "./assets/amazonas2.png";

export const rentalsSection = {
  title: "Rentals",
  subheading1_1: "What Poor Maintenance ",
  subheading1_2: "Is Really Costing Your Property",
  rentals: [
    {
      title: "Pavement Life Extension Value",
      description:
        "Standard asphalt pavement lasts 20-30 years with proper maintenance. Early preventative maintenance has been shown to extend pavement life in ongoing studies.",
      source: "Regular Sweeping Extends Pavement Life",
      // <a href='https://pavementinteractive.org/reference-desk/design-construction/maintenance/'>Learn More</a>
      visual: img1,
    },
    {
      title: "Cost of Neglect",
      description:
        "Once pavement reaches a critical deterioration point, the rate of decline accelerates dramatically - what took 75% of the pavement's life to deteriorate 40% will deteriorate another 40% in just 17% more time.",
      source: "Major Resurfacing In Phoenix Is Expensive",
      // <a href='https://pavementinteractive.org/reference-desk/pavement-management/analysis/pavement-life-cycle/'>Learn More</a>
      visual: img2,
    },
    {
      title: "Resurfacing Cost Avoidance",
      description:
        "Timely maintenance can delay the need for resurfacing by years, with early intervention being far more cost-effective than waiting until severe deterioration occurs.",
      source: "Enhanced Property Value And Curb Appeal",
      //  <a href='https://pavementinteractive.org/reference-desk/pavement-management/analysis/pavement-life-cycle/'>Learn More</a>
      visual: img3,
    },
  ],
  callToAction: "Embark on a Green Energy Journey with Southwest Sweeper Sales",
  button: "Check Out Our Rental Inventory",
};
