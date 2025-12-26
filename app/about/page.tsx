import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-26 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-light text-black mb-10">about.</h1>
          <p className="text-4xl text-black font-bold leading-relaxed w-3/4 mb-10">
            I am a Global Business and Digital Arts student at the University of Waterloo, aiming to explore and grow my expertise in design thinking and apply it to the real world.
          </p>
          <div className="grid grid-cols-[75%_25%] gap-12">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img src="/images/about.jpg" alt="Ella Li" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-xl text-black text-right">
                I'm dedicated to crafting beautiful and highly functional designs that seamlessly align with my clients' unique needs and long-term goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

