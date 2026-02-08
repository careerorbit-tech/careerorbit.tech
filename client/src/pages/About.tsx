import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-primary">About Us</h1>
        <div className="prose prose-lg text-muted-foreground">
          <p className="lead text-xl text-foreground font-medium mb-6">
            CareerOrbit.Tech is dedicated to bridging the gap between talent and opportunity. We focus on providing freshers and early professionals with verified, high-quality job listings.
          </p>
          <p className="mb-6">
            Founded with the mission to democratize access to career opportunities, we scour the internet, verify company career pages, and bring you the most relevant off-campus drives and internship updates.
          </p>
          <p>
            We believe that every student deserves a chance to launch their career at a great company, regardless of their college tier or location. That's why we focus on:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
             <li><strong>Verified Jobs:</strong> We check every listing to ensure it's legit.</li>
             <li><strong>Speed:</strong> We update our listings daily so you never miss a deadline.</li>
             <li><strong>Accessibility:</strong> Our platform is free for job seekers.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
