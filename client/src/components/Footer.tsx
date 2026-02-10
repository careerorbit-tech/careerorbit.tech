import { Link } from "wouter";
import { Rocket, Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold font-heading text-primary">
                CareerOrbit<span className="text-accent">.Tech</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted platform for the latest off-campus drives, internships, and fresher job openings in India.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/jobs"><a className="hover:text-primary transition-colors">Browse Jobs</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/resume-tips"><a className="hover:text-primary transition-colors">Resume Tips</a></Link></li>
              <li><Link href="/interview-prep"><a className="hover:text-primary transition-colors">Interview Prep</a></Link></li>
              <li><Link href="/placement-guides"><a className="hover:text-primary transition-colors">Placement Guides</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/careerorbit.tech" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587419666890" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@CareerOrbitTech" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CareerOrbit.Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
