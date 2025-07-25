import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import logo_large from '../assets/logo_large.png'
import { useState, useEffect } from "react";

export default function HomePage() {

  const scriptures = [
    "“And You shall love Yahweh your God with all your heart and with all your soul and with all your exceedingly.” - Deuteronomy 6:5",
    "“Be transformed by the renewing of your mind.” – Romans 12:2",
    "“Above all else, guard your heart, for everything you do flows from it.” – Proverbs 4:23",
    "“I praise You for I am fearfully and wonderfully made.” – Psalm 139:14",
    "“Create in me a clean heart, O God, and renew a right spirit within me.” – Psalm 51:10",
  ];

  const navigate = useNavigate()

  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prevIndex) => (prevIndex + 1) % scriptures.length);
    }, 8000); // rotate every 20 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);


  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-white px-6">

      {/* Watermark background image */}
      <img
        src={logo_large}
        alt="PsycheGenesis Watermark"
        className="absolute opacity-10 w-[600px] h-[600px] object-contain pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Foreground content */}
      <div className="z-10 text-center">
        <img
          src={logo}
          alt="PsycheGenesis Logo"
          className="w-64 h-64 mx-auto mb-4 animate-fade-in"
        />

        <h1 className="text-5xl font-extrabold text-amber-800 mb-2">
          PsycheGenesis
        </h1>

        <p className="text-md italic text-amber-700 mb-4">
          Mapping the spirit, soul, and body — for a life of purpose
        </p>

        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
          Discover how your personality, identity, calling, gifts, and growth journey come together into a
          unified profile. Based on biblical wisdom, psychology, and spiritual insight.
        </p>

        <button
          onClick={() => navigate('/questionnaire')}
          className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl shadow-lg hover:bg-amber-700 transition"
        >
          Begin Assessment
        </button>
      </div>

      <div className="bottom-0 left-0 right-0 text-center text-sm text-amber-700 p-4 z-10 flex flex-col items-center space-y-2">

  <p className="italic transition-opacity duration-500 ease-in-out">
    {scriptures[currentVerseIndex]}
  </p>
  <div className="flex space-x-8 text-md text-amber-600">
    <a href="/about" className="hover:underline">About</a>
    <a href="/docs" className="hover:underline">Docs</a>
    <a href="/privacy" className="hover:underline">Privacy Policy</a>
  </div>

  <p className="text-xs text-amber-600">
    © {new Date().getFullYear()} PsycheGenesis by Jacob D. Jackson. All rights reserved.
  </p>
</div>



    </div>
  )
}
