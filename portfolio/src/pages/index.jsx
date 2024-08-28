import '../app/globals.css';
import ReactDOM from 'react-dom';
import Header from '../components/header.jsx';
import Section from '../components/section.jsx';

export default function Home() {

    const experience = [
      "UX Researcher Science, Chan Zuckerberg Initiative",
      "Product Manager, U.S Department of Health & Human Services",
      "Venture Analyst, Kaplan Institute at Illinois Tech",
      "Technology Analyst, Dom’s Kitchen & Market (Series A Startup)",
    ]
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Header />
  
        <main className="flex-1 w-full flex flex-col lg:flex-row">
        {/* Content Section */}
        <section className="flex-1 lg:ml-64 p-8">
          <Section header="My Experience" experiences={experience} />
        </section>
      </main>
  
        <footer className="w-full bg-gray-800 text-black py-4">
          <div className="container mx-auto text-center">
            &copy; 2024 My Next.js App. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
  