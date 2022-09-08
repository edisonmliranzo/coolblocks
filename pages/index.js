import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>CoolBlocks555 is a low-cost and lightning-fast Ethereum L2 blockchain. Fastest & Lowest Fee, Secure & Scalable Blockchain Ecosystem.</title>
        <meta
          name="description"
          content=" CoolBlocksnft is committed to fostering the growth of Web3 applications by providing the infrastructure needed for Web3."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="CoolBlocks is Solidity-compatible. All of your favorite tools like Remix, Truffle, and Tenderly work out of the box."
        title=" Build Ethereum dApps Without Limits">
        Lowest costs to deploy contracts
Deploying smart contracts on CoolBlocks cost just a tenth of what they cost on Ethereum. High gas fees, front-running, and other adverse effects of slow smart contract blockchains are now a thing of the past.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Decentralized Finance (DeFi)">
        DeFi is rapidly growing beyond the limits of one chain. CoolBlocks is fully compatible with Ethereum assets, apps, and tooling with faster speeds, higher throughput, and lower fees.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Learn what use cases benefit most by leveraging the high-performance capabilities of Avalanche."
        title="Digital Collectibles">
        Mint your own digital collectibles in seconds for fees less than a cent. Digitally prove ownership, and streamline value flow. Create and share art, collectibles, and more with all the benefits and none of the downside.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Institutions, Enterprises, and Governments">
        CoolBlocks is the best verifiable platform for institutions, enterprises, and governments. Launch assets, build applications, and create subnets with complete control over your implementation with compliance, data security, and other rulesets built into the foundation.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
