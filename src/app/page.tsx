import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Header />
        <section>
          <About />
        </section>
        <section> 
          <Skills />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Education />
        </section>
      </div>
    </main>
  );
}
