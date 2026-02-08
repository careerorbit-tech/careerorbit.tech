import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <h1 className="text-3xl font-bold font-heading mb-8">Privacy Policy</h1>
        <div className="prose text-muted-foreground space-y-6">
          <p>Last updated: October 2023</p>
          <p>
            At CareerOrbit.Tech, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our site.
          </p>
          
          <h2 className="text-xl font-bold text-foreground mt-8">Information We Collect</h2>
          <p>
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">How We Use Your Information</h2>
          <p>
            We use the Information to:
          </p>
          <ul className="list-disc pl-6">
            <li>Communicate with you;</li>
            <li>Screen our orders for potential risk or fraud; and</li>
            <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
