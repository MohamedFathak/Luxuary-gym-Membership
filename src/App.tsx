import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Benefits } from './components/Benefits';
import { Compare } from './components/Compare';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-body text-ink antialiased">
      <main>
        <Hero />
        <Plans />
        <Benefits />
        <Compare />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
