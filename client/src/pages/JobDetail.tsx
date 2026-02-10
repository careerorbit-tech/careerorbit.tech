import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JOBS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useRoute } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, Banknote, ArrowLeft, Share2, Building2 } from "lucide-react";
import NotFound from "./not-found";

export default function JobDetail() {
  const [match, params] = useRoute("/jobs/:id");
  const job = JOBS.find(j => j.id === params?.id || `${j.id}-dup` === params?.id);

  const { toast } = useToast();

  const handleApply = () => {
    if (job?.applyLink) {
      window.open(job.applyLink, "_blank");
    } else {
      toast({
        title: "Application Link Unavailable",
        description: "Please check back later for the application link.",
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: job?.title,
      text: `Check out this job at ${job?.company}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied",
          description: "Job link copied to clipboard.",
        });
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  if (!job) return <NotFound />;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link href="/jobs">
          <Button variant="ghost" className="mb-6 pl-0 text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
                <div className="flex gap-4">
                  <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-lg object-contain bg-white border border-border p-2" />
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-1">{job.title}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground font-medium">
                      <Building2 className="h-4 w-4" />
                      {job.company}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button
                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 shadow-lg shadow-accent/20"
                    onClick={handleApply}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border mb-8">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Job Type</p>
                  <p className="font-semibold">{job.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Location</p>
                  <p className="font-semibold">{job.location}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Salary</p>
                  <p className="font-semibold text-primary">{job.salary}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Posted</p>
                  <p className="font-semibold">{job.postedAt}</p>
                </div>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold font-heading mb-4">Job Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-heading mb-4">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold font-heading mb-4">Eligible Batches</h3>
                  <div className="flex gap-2">
                    {job.batch.map((b) => (
                      <Badge key={b} variant="secondary" className="px-3 py-1 text-sm">{b} Batch</Badge>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-bold font-heading text-lg mb-4">Job Summary</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">0-1 Years</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Department</span>
                  <span className="font-medium">Engineering</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Role Category</span>
                  <span className="font-medium">Developer</span>
                </div>
              </div>
              <Button
                className="w-full mt-6 bg-accent hover:bg-accent/90 text-white font-semibold h-12"
                onClick={handleApply}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
