// src/components/HomePage.tsx
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png' // adjust path if needed

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-100 to-white p-8 text-center">
      <img
        src={logo}
        alt="PsycheGenesis Logo"
        className="w-64 h-64 mb-6 animate-fade-in"
      />

      <h1 className="text-5xl font-extrabold text-amber-800 mb-4">PsycheGenesis</h1>

      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Discover how your spirit, soul, and body align. Uncover your calling, gifts, healing journey,
        and personal growth trajectory through a comprehensive biblical assessment model.
      </p>

      <button
        onClick={() => navigate('/questionnaire')}
        className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl shadow-lg hover:bg-amber-700 transition"
      >
        Begin Assessment
      </button>
    </div>
  )
}
