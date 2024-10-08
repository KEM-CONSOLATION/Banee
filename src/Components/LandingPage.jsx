import { useEffect, useState } from "react";
import EYE from "../assets/EYELOGOANIMATION.gif";
import EYEBanner from "../assets/eyeBanner2.gif";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.svg";
import AOS from "aos";
import "aos/dist/aos.css";
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
            BIG BAD <span className="text-[#5CE1E6]">BAREE</span>
          </p>
          <p className=" font-[500] text-[24px] font-asphaltic text-[#5CE1E6]">
            POWERED BY SUI
          </p>
        </div>

        <div
          className=" mt-[40px] grid gap-[30px] md:flex items-center justify-between"
          data-aos="fade-up"
        >
          <div className=" max-w-[510px] 2xl:max-w-[610px]">
            <p className=" mb-[20px] text-[#5CE1E6] leading-[60px] md:leading-[70px] text-[60px] 2xl:[100px] font-[500] animate-pulse">
              $BAREE <span className=" text-[#907CFF]">IS</span> <br />
              <span className=" text-[#907CFF]">
                THE BIGGEST AND MOST AGGRESSIVE FISH IN THE{" "}
                <span className=" text-[#5CE1E6] ">SUI</span> BLOCKCHAIN OCEAN
              </span>
            </p>
            <p className=" hidden  animate-bounce shadow-lg shadow-white text-white px-[23px] py-[5px] rounded-[10px] bg-[#FF3131] md:inline-block text-[40px]">
              Buy <span className=" text-[#5CE1E6]"> $BAREE</span>
            </p>
          </div>

          <div className="">
            <div className=" animate-pulse">
              <img src={EYE} alt="My GIF" />
            </div>
            <p className=" md:hidden  animate-bounce shadow-lg shadow-white text-white px-[23px] py-[5px] rounded-[10px] bg-[#FF3131] text-center block text-[40px] mt-[40px]">
              Buy <span className=" text-[#5CE1E6]"> $BAREE</span>
            </p>
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
              <span className=" text-[#5CE1E6]">*$BAREE</span> MADE A FAIR
              LAUNCH OF <span className="  font-serif">1</span> BILLION
              COMMUNITYY DRIVEN TOKENS WITH:
            </p>
            <p className=" ">*CONTRACTED REVOKED/RENOUNCED</p>{" "}
            <p className=" ">*LP BURNED</p>
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

          <p className=" uppercase text-center font-bold text-white font-serif overflow-x-scroll text-[24px] lg:text-[30px]">
            1A1zP1eP5QGefi2enjwenfnjfjwhekdhui2gquig2iqhhhjkskdqkhdgkqggqdjwdLmv7DivfNa
          </p>
          <div className=" flex items-center justify-center my-[20px] animate-bounce">
            <p className=" shadow-lg shadow-white text-white px-[23px] py-[5px] rounded-[10px] bg-[#FF3131] inline-block text-[40px]">
              Buy <span className=" text-[#5CE1E6]"> $BAREE</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" max-w-full ">
        <img src={EYEBanner} className=" w-full " alt="GIF" />
      </div>

      <div className="  ">
        <div
          className=" mx-[10px] lg:mx-[40px] py-[20px] tracking-widest"
          data-aos="fade-up"
        >
          <p className=" lg:text-[56px] font-[600] text-[40px] text-[#5CE1E6] py-[20px] text-center">
            HOW TO BUY $BAREE
          </p>

          <div className="  text-[24px] lg:text-[30px] grid gap-[22px] mx-[10px] md:mx-0 md:grid-cols-2 lg:grid-cols-3 items-start place-items-center text-white  font-[500]">
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" uppercase text-[#907CFF]">
                Step <span className=" font-serif">1:</span> Set Up a
                SUI-Compatible Wallet
              </p>
              <p className=" text-[#5CE1E6] ">
                <span className=" font-serif">1.</span> Download a
                SUI-Compatible Wallet: Choose a wallet that supports the SUI
                blockchain. Some popular options are Tonkeeper, Tonhub, or
                Wallet by Free SUI. <br />{" "}
                <span className=" font-serif">2.</span> Create a New Wallet:
                Follow the prompts to create a new wallet, securely store your
                seed phrase, and set up your wallet.
              </p>
            </div>
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" uppercase text-[#907CFF]">
                Step <span className=" font-serif">2:</span> Fund Your Wallet
                with SUI
              </p>
              <p className=" text-[#5CE1E6] ">
                <span className=" font-serif">1.</span> Purchase SUI: Buy SUI
                coins on a supported exchange such as Binance, KuCoin. <br />
                <span className=" font-serif">2.</span> Transfer SUI to Your
                Wallet: Withdraw the SUI coins from the exchange to your SUI
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
                that operates on the SUI network. Popular choices include DeDust
                and STON.fi.
                <br /> <span className=" font-serif">2.</span> Connect Your
                Wallet: Follow the instructions to connect your SUI-compatible
                wallet to the DEX.
              </p>
            </div>
            <div className=" max-w-[400px] grid gap-[20px] text-justify">
              <p className=" uppercase text-[#907CFF]">
                Step <span className=" font-serif">4:</span> Buy $BAREE
              </p>
              <p className=" text-[#5CE1E6] ">
                <span className=" font-serif">1.</span> Select Trading Pair:
                Look for the trading pair that involves $BAREE and SUI (e.g.,
                BAREE/SUI).
                <br /> <span className=" font-serif">2.</span> Set the Amount:
                Enter the amount of $BAREE you want to buy or the amount of SUI
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
                ensure you have received $BAREE.
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
