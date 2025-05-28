import React, { useState } from "react";
import { Copy } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "YourContractAddressHere";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-russo">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 space-y-6">
        <div className="flex justify-center w-full">
          <img
            src="/heartcoins slant.png"
            alt="HeartCoin Title"
            className="w-[300px] md:w-[400px] mx-auto"
          />
        </div>
      </section>

      {/* Social Buttons above CA */}
      <section className="flex justify-center gap-6 mb-12 px-6">
        <a
          href="https://t.me/heartcoinportal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold"
        >
          Telegram
        </a>
        <a
          href="https://twitter.com/heartcoin"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold"
        >
          Twitter
        </a>
        <a
          href="https://dexscreener.com/solana/heartcoin"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold"
        >
          DexScreener
        </a>
      </section>

      {/* Contract Address Section */}
      <section className="py-12 px-6 text-center">
        <div className="flex justify-center items-center gap-4 text-left">
          <span className="text-2xl font-extrabold">CA:</span>
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
            Copied to clipboard!
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400 select-none">
        © 2025 HeartCoin. All Love Reserved.
      </footer>
    </div>
  );
}
