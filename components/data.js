import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Bringing the world to Ethereum",
  desc: "We believes in Web3 for all. CoolBlocks is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.",
  image: benefitOneImg,
  bullets: [
    {
      title: "ETH Compatibility",
      desc: "ndustry dominance, established tech stack, tools, languages, standards, enterprise adoption",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Scalability",
      desc: "Dedicated blockchains, scalable consensus algorithms, custom Wasm execution environments",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Security",
      desc: "Modular ''security as a service'', provided either by Ethereum or by a pool of professional validators",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Developer Experience",
  desc: "Equivalent to Ethereum, no protocol level knowledge required, no token deposits, fees or permissions",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "CoolBlocks is committed to fostering the growth of Web3 applications by providing the infrastructure needed for Web3.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Launch customized blockchains, private & public",
      desc: "Over 100+ dApps have used CoolBlocks to scale their performance",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Scale to 1000s of validators with minimal hardware",
      desc: "Stake, or lock up, your CBT to help process transactions and further secure the platform–providing security guarantees well-above the 51% standard. You probably have the hardware required to join the platform. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
