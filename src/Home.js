import React, { useState, useEffect } from "react";
import { Copy } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "94NWecK6uMuwLkpBz87wH3Hs13ziPAQ7z8ped1UDpump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const heartInterval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
      heart.style.position = "fixed";
      heart.style.top = "-20px";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heart.style.opacity = Math.random();
      heart.style.animation = "fall 5s linear infinite";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 300);

    return () => clearInterval(heartInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-russo flex flex-col justify-center items-center px-4 overflow-hidden">
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-6 w-full max-w-4xl mt-12">
        <img
          src="/heartcoins slant.png"
          alt="heartcoin title"
          className="mx-auto w-full max-w-[90%] md:max-w-[800px]"
        />

        {/* Social Buttons above CA */}
        <div className="flex justify-center gap-6 w-full mt-6">
          <a
            href="https://t.me/heartcoinportal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold flex-grow text-center"
          >
            telegram
          </a>
          <a
            href="https://x.com/HeartCoinOnSol/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold flex-grow text-center"
          >
            twitter
          </a>
          <a
            href="https://dexscreener.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold flex-grow text-center"
          >
            dexscreener
          </a>
        </div>

        {/* Contract Address Section */}
        <section className="py-12 px-6 text-center w-full">
          {/* Custom Text Above CA */}
          <p className="text-white text-center text-base mb-6">
            A heart is worth more than an ass and a fart , if you have a heart you'll hold ❤️
          </p>

          <div className="flex justify-center items-center gap-4 text-left max-w-full">
            <span className="text-2xl font-extrabold">ca:</span>
            <div className="flex items-center gap-3 bg-white text-black rounded-full px-6 py-3 text-sm md:text-base shadow-md border border-gray-300 max-w-full">
              <span className="truncate max-w-xs md:max-w-md select-all">
                {contractAddress}
              </span>
              <button
                onClick={copyToClipboard}
                className="text-black hover:text-gray-700 transition"
                title="Copy to clipboard"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
          {copied && (
            <p className="text-white font-medium mt-2 animate-pulse">
              copied to clipboard!
            </p>
          )}
        </section>

        {/* Info Section */}
        <section className="flex flex-col md:flex-row items-center justify-center text-left w-full mt-12 px-6 gap-6">
          {/* Image */}
          <img
            src="/tommy.jpg"
            alt="Tommy"
            className="w-full md:w-1/2 max-w-[250px] rounded-xl shadow-lg"
          />

          {/* Text */}
          <div className="md:w-1/2 text-white space-y-4 text-center">
            <h2 className="text-2xl font-bold text-center">why heartcoin?</h2>
            <p className="text-base">
              Brought to you by Tommy Bui heartcoin is more than just a token – it's a statement. powered by passion and driven by community, we believe love and loyalty should be rewarded. join us and hold strong. ❤️
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.instagram.com/kingtbui/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://x.com/kingtbui" target="_blank" rel="noopener noreferrer">
                <img src="/x.png" alt="X" className="w-8 h-8" />
              </a>
              <a href="https://www.youtube.com/@tommythanhbui" target="_blank" rel="noopener noreferrer">
                <img src="/youtube.png" alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@kingtbui" target="_blank" rel="noopener noreferrer">
                <img src="/tiktok.png" alt="TikTok" className="w-8 h-8" />
              </a>
              <a href="https://t.me/BUIALPHA" target="_blank" rel="noopener noreferrer">
                <img src="/telegram.png" alt="Telegram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400 select-none w-full max-w-md">
        © 2025 HeartCoin. All Love Reserved.
      </footer>
    </div>
  );
}
