import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { JOBS, STATS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-tech.png";
import { Link } from "wouter";

export default function Home() {
  const featuredJobs = JOBS.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Verified Daily Updates
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground tracking-tight leading-[1.1]">
                Launch Your Career with <br/>
                <span className="text-primary relative inline-block">
                  Top Opportunities
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground md:max-w-xl leading-relaxed">
                Discover the latest off-campus drives, internships, and fresher jobs at top tech companies. Curated daily for your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/jobs">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 shadow-lg shadow-primary/25">
                    Browse Jobs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/50 text-foreground hover:bg-secondary h-12">
                  <Instagram className="mr-2 h-4 w-4 text-accent" />
                  Follow Updates
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>100% Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Direct Links</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>No Spam</span>
                </div>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-full -z-10" />
              <img 
                src={heroImage} 
                alt="Career Growth Technology" 
                className="rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm w-full object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Hired!</p>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-border/60 text-primary mb-2">
                  <stat.icon className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-foreground">{stat.value}</h3>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Featured Opportunities</h2>
              <p className="text-lg text-muted-foreground">Hand-picked jobs from top companies.</p>
            </div>
            <Link href="/jobs">
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 font-semibold group">
                View All Jobs <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
         <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8">
           <h2 className="text-3xl md:text-5xl font-bold font-heading">Ready to Start Your Career?</h2>
           <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
             Join thousands of students and professionals who found their dream job through CareerOrbit.
           </p>
           <div className="flex justify-center gap-4">
             <Link href="/jobs">
               <Button size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-lg font-semibold shadow-xl">
                 Explore Jobs Now
               </Button>
             </Link>
           </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
