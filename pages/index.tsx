import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </main>
  )
}
