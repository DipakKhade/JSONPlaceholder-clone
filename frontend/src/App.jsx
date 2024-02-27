import Header from "./components/Header"
import Hero from "./components/Hero"
import Resources from "./components/Resources"
import Sponsor from "./components/Sponsors"
import TryCode from "./components/TryCode"
import Use from "./components/Use"
export default function App(){
  return(
    <>
    <main className="pl-16">


      <Header/>
      <Hero/>
      <Sponsor/>
      <TryCode/>
      <Use/>
    </main>
    <Resources/>
    </>
  )
}