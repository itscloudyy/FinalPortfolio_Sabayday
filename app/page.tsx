import Hero from "@/components/Hero";
import BigThree from "@/components/BigThree";
import GrowthTab from "@/components/GrowthTab";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <BigThree />
      <GrowthTab />
      <ContactForm />
      <Footer />
    </main>
  );
}
