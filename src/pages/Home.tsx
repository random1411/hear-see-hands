
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-violet-100">
      <header className="w-full py-8 px-4 bg-gradient-to-r from-blue-700 to-indigo-500 text-white shadow-md">
        <div className="container mx-auto flex items-center">
          <Home className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold">Sign Language Translator</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto flex flex-col items-center justify-center px-4">
        <section className="max-w-2xl text-center mt-16 bg-white/90 rounded-xl shadow-lg px-8 py-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-800">Welcome!</h2>
          <p className="mb-6 text-lg text-gray-700">
            Break communication barriers. Instantly translate between spoken, written, and sign language.<br />
            <span className="block mt-1 text-blue-600 font-medium">Type, speak, translate, and visualize—all in one place.</span>
          </p>
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
            alt="Sign Language Hero"
            className="rounded-lg mx-auto mb-6 w-full max-w-md shadow"
            style={{ aspectRatio: "3/2", objectFit: "cover" }}
          />
          <Link
            to="/app"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition-all shadow-md text-lg"
          >
            Get Started
          </Link>
        </section>
      </main>

      <footer className="bg-blue-50 py-6 px-4 border-t mt-10">
        <div className="container mx-auto text-center text-gray-600">
          <p>© 2025 Sign Language Translator | Empowering communication for all</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
