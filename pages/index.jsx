import Image from "next/image";
import localFont from "next/font/local";
import LandingPage from "./Components/LandingPage";
import Anoouncementpage from "./Components/Anoouncementpage";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (

  <>
<div className="w-screen h-screen overflow-x-hidden" style={{
        backgroundImage:"url(/image.png)",
        backgroundPosition:"center",
        backgroundSize:"cover"
    }}>
<LandingPage/>
<Anoouncementpage/>
</div>
  </>
  );
}
