import logo1 from "../assets/images/clients/Home Page Logo/AliExpress.png";
import logo2 from "../assets/images/clients/Home Page Logo/Bbvalogoo.png";
import logo3 from "../assets/images/clients/Home Page Logo/BetMGMlogooo.png";
import logo4 from "../assets/images/clients/Home Page Logo/Cmlogo.png";
import logo5 from "../assets/images/clients/Home Page Logo/FairMoneylogo.jpg";
import logo6 from "../assets/images/clients/Home Page Logo/Gcash.png";
import logo7 from "../assets/images/clients/Home Page Logo/Mashreqlogooo.png";
import logo8 from "../assets/images/clients/Home Page Logo/PrimeVideo.png";
import logo9 from "../assets/images/clients/Home Page Logo/Shopeelogoo.png";
import logo10 from "../assets/images/clients/Home Page Logo/Surfsharklogo.png";
import logo11 from "../assets/images/clients/Home Page Logo/TikTok.png";
import logo12 from "../assets/images/clients/Home Page Logo/Tripcomlogo.png";
import logo13 from "../assets/images/clients/Home Page Logo/Underdoglogo.png";

const LOGOS = [
  { name: "Ali Express", src: logo1 },
  { name: "BBVA", src: logo2 },
  { name: "BetMGM", src: logo3 },
  { name: "Cm", src: logo4 },
  { name: "Fair Money", src: logo5 },
  { name: "Gcash", src: logo6 },
  { name: "Mashreq", src: logo7 },
  { name: "Prime Video", src: logo8 },
  { name: "Shopee", src: logo9 },
  { name: "Surfshark", src: logo10 },
  { name: "TikTok", src: logo11 },
  { name: "Trip.com", src: logo12 },
  { name: "Underdog", src: logo13 },
];

const TICKER = [...LOGOS, ...LOGOS];

export default function LogoTicker() {
  return (
    <div className="py-10 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee gap-16 w-max items-center">
        {TICKER.map((logo, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            <img
              src={logo.src}
              alt={logo.name}
              style={{
                height: "32px",
                width: "auto",
                objectFit: "contain",
                opacity: 0.75,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
