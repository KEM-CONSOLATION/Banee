import { useEffect, useState } from "react";
import EYE from "../assets/EYELOGOANIMATION.gif";
import EYEBanner from "../assets/eyeBanner.png";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className=" font-asphaltic ">
      <div className=" pb-[100px] mx-[10px] lg:mx-[40px]">
        <div className=" text-center animate-pulse">
          <p className=" font-[500] text-[56px] font-asphaltic text-[#8C52FF]">
            BIG BAD <span className="text-[#5CE1E6]">BANEE</span>
          </p>
          <p className=" font-[500] text-[24px] font-asphaltic text-[#5CE1E6]">
            POWERED BY TON
          </p>
        </div>

        <div
          className=" mt-[40px] grid gap-[30px] md:flex items-center justify-between"
          data-aos="fade-up"
        >
          <div className=" max-w-[510px] 2xl:max-w-[610px]">
            <p className=" mb-[20px] text-[#5CE1E6] leading-[60px] md:leading-[70px] text-[60px] 2xl:[100px] font-[500] animate-pulse">
              $BANNE <span className=" text-[#907CFF]">is</span> <br />
              <span className=" text-[#907CFF]">
                THE BIGGEST AND MOST AGGRESSIVE FISH IN THE{" "}
                <span className=" text-[#5CE1E6] ">TON</span> BLOCKCHAIN OCEAN
              </span>
            </p>
            <p className=" animate-bounce shadow-lg shadow-white text-white px-[23px] py-[5px] rounded-[10px] bg-[#FF3131] inline-block text-[40px]">
              Buy <span className=" text-[#5CE1E6]"> $BANEE</span>
            </p>
          </div>

          <div className=" animate-pulse">
            <img src={EYE} alt="My GIF" />
          </div>
        </div>
      </div>

      <div className="  bg-[#8C52FF]">
        <div
          className=" mx-[10px] lg:mx-[40px] py-[20px] tracking-widest"
          data-aos="fade-up"
        >
          <p className=" uppercase lg:text-[56px] font-[600] text-[40px] text-[#5CE1E6] text-center">
            Tokenomics
          </p>

          <div className=" grid gap-[24px] text-white text-[24px] lg:text-[30px]">
            <p>
              <span className=" text-[#5CE1E6]">*$BANEE</span> MADE A FAIR
              LAUNCH OF <span className="  font-serif">1</span> BILLION
              COMMUNITYY DRIVEN TOKENS WITH:
            </p>
            <p>*ZERO TEAM ALLOCATION</p>
            <p>*ZERO PRESALE</p>
            <p>*ZERO TAXES</p>
          </div>
        </div>
      </div>

      <div className="  ">
        <div
          className=" mx-[10px] lg:mx-[40px] py-[20px] tracking-widest"
          data-aos="fade-up"
        >
          <p className=" lg:text-[56px] font-[600] text-[40px] text-[#5CE1E6] text-center">
            LAUNCH MECHANIC
          </p>

          <div className=" grid gap-[16px] text-white text-[20px] lg:text-[24px]">
            <p className=" text-[#907CFF]">
              *MAX SUPPLY:
              <span className=" text-[#5CE1E6] font-serif">1,111,111,111</span>
            </p>
            <p className=" text-[#907CFF]">
              *TOTAL SUPPLY:
              <span className=" text-[#5CE1E6] font-serif">1,111,111,111</span>
            </p>
            <p className=" text-[#907CFF]">
              *CIRTCULATING SUPLY AT LAUNCH:
              <span className=" text-[#5CE1E6] font-serif">1,111,111,111</span>
            </p>
            <p className=" text-[#907CFF]">*CONTRACTED REVOKED/RENOUNED</p>{" "}
            <p className=" text-[#907CFF]">*LIQUIDITY LOCKED FOREVER</p>
            <p className=" text-[#907CFF]">*ANTI-BOT</p>
            <p className="text-[#907CFF]">
              *ANTI WHALE:
              <span className="text-[#5CE1E6] font-serif">
                {"<"}=1.1% FIRST 1DAY POST-LAUNCH{" "}
              </span>
            </p>
            <p className="text-[#907CFF]">
              *TOKEN BURN MECHNISM(TBM):
              <span className="text-[#5CE1E6] font-serif">AUTOMATIC</span>
            </p>
          </div>
        </div>
      </div>

      <div className=" py-[20px] ">
        <div
          className=" mx-[10px] lg:mx-[40px] py-[20px] tracking-widest"
          data-aos="fade-up"
        >
          <p className=" lg:text-[56px] font-[600] text-[40px] text-[#5CE1E6] text-center">
            CONTACT ADDRESS
          </p>

          <p className=" uppercase text-center font-bold text-white font-serif overflow-x-scroll">
            1A1zP1eP5QGefi2enjwenfnjfjwhekdhui2gquig2iqhhhjkskdqkhdgkqggqdjwdLmv7DivfNa
          </p>
          <div className=" flex items-center justify-center my-[20px] animate-bounce">
            <p className=" shadow-lg shadow-white text-white px-[23px] py-[5px] rounded-[10px] bg-[#FF3131] inline-block text-[40px]">
              Buy <span className=" text-[#5CE1E6]"> $BANEE</span>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img src={EYEBanner} alt="" />
      </div>

      <div className="  ">
        <div
          className=" mx-[10px] lg:mx-[40px] py-[20px] tracking-widest"
          data-aos="fade-up"
        >
          <p className=" lg:text-[56px] font-[600] text-[40px] text-[#5CE1E6] py-[20px] text-center">
            <Typewriter
              words={["HOW TO BUY $BANEE"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={300}
              delaySpeed={1000}
            />
          </p>

          <div className="  text-[16px] grid gap-[22px] mx-[10px] md:mx-0 md:grid-cols-2 lg:grid-cols-3 items-start place-items-center text-white  lg:text-[20px]">
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" uppercase text-[#907CFF]">
                Step <span className=" font-serif">1:</span> Set Up a
                TON-Compatible Wallet
              </p>
              <p className=" text-[#5CE1E6] ">
                <span className=" font-serif">1.</span> Download a
                TON-Compatible Wallet: Choose a wallet that supports the TON
                blockchain. Some popular options are Tonkeeper, Tonhub, or
                Wallet by Free TON. <br />{" "}
                <span className=" font-serif">2.</span> Create a New Wallet:
                Follow the prompts to create a new wallet, securely store your
                seed phrase, and set up your wallet.
              </p>
            </div>
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" uppercase text-[#907CFF]">
                Step <span className=" font-serif">2:</span> Fund Your Wallet
                with TON
              </p>
              <p className=" text-[#5CE1E6] ">
                <span className=" font-serif">1.</span> Purchase TON: Buy TON
                coins on a supported exchange such as Binance, KuCoin, or FTX.{" "}
                <br />
                <span className=" font-serif">2.</span> Transfer TON to Your
                Wallet: Withdraw the TON coins from the exchange to your TON
                wallet address.
              </p>
            </div>
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" uppercase text-[#907CFF]">
                Step <span className=" font-serif">3:</span> Connect to a
                Decentralized Exchange (DEX)
              </p>
              <p className=" text-[#5CE1E6] ">
                <span className=" font-serif">1.</span> Open a DEX: Use a DEX
                that operates on the TON network. Popular choices include DeDust
                and STON.fi.
                <br /> <span className=" font-serif">2.</span> Connect Your
                Wallet: Follow the instructions to connect your TON-compatible
                wallet to the DEX.
              </p>
            </div>
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" uppercase text-[#907CFF]">
                Step <span className=" font-serif">4:</span> Buy $BANEE
              </p>
              <p className=" text-[#5CE1E6] ">
                <span className=" font-serif">1.</span> Select Trading Pair:
                Look for the trading pair that involves $BANEE and TON (e.g.,
                BANEE/TON).
                <br /> <span className=" font-serif">2.</span> Set the Amount:
                Enter the amount of $BANEE you want to buy or the amount of TON
                you want to spend. <br />{" "}
                <span className=" font-serif">3.</span> Execute the Trade:
                Review the details and confirm the transaction.
              </p>
            </div>

            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" uppercase text-[#907CFF]">
                Step <span className=" font-serif">5:</span> Confirm the
                Transaction
              </p>
              <p className=" text-[#5CE1E6] ">
                <span className=" font-serif">1.</span>Check Wallet Balance:
                After the transaction is confirmed, check your wallet balance to
                ensure you have received $BANEE.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-[20px] ">
        <div className=" mx-[10px] lg:mx-[40px] py-[20px] tracking-widest">
          <p className=" uppercase lg:text-[56px] font-[600] text-[40px] text-[#5CE1E6] text-center">
            socials
          </p>

          <div className=" flex items-center justify-center gap-[20px]">
            <img src={Twitter} alt="" />
            <img src={Telegram} alt="" />
          </div>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#ffffff] text-[#2F160B] px-4 py-4 rounded-full shadow-lg hover:bg-[#47240E] hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
