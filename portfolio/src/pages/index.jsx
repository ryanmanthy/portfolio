import '../app/globals.css';
import ReactDOM from 'react-dom';
import Header from '../components/header.jsx';

export default function Home() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Header />
  
        <main className="container mx-auto flex flex-col items-center justify-center flex-1 px-6 py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-black mb-8">ryan manthy</h1>
          <p className="text-lg md:text-2xl text-center text-black mb-8">
            hey, i'm ryan! i design software for{' '}
            <span className="underline" style={{ color: '#1D4ED8' }}>health</span>,{' '}
            <span className="underline" style={{ color: '#10B981' }}>civics</span>, and{' '}
            <span className="underline" style={{ color: '#EF4444' }}>social good</span>.
            <br />i've built social tech that has reached millions of visitors and made changes big and small
            </p>
          <p className="text-lg md:text-2xl text-center text-black mb-8">
            currently ux intern @ <code className="bg-gray-200 p-1 rounded">Chan Zuckerberg Initiative</code> <br />
            studying computer science @ <code className="bg-gray-200 p-1 rounded">Illinois Tech</code> <br />
            obama-chesky scholar, civic digital fellow, and more...
          </p>
          <p className="text-lg md:text-2xl text-center text-black mb-8">
            formerly dept. of health & human services, kaplan institute, and dom's kitchen & market <br />
            startup tinkerer in bio, gov, & edu
          </p>
          <div className="flex space-x-4">
            <a href="/about" className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">About /</a> 
            <a href="/portfolio" className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">Portfolio /</a>
            <a href="/press" className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">Press</a>
          </div>
        </main>
  
        <footer className="w-full bg-gray-800 text-black py-4">
          <div className="container mx-auto text-center">
            &copy; 2024 My Next.js App. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
  