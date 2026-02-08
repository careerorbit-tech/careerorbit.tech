import { Job } from "@/lib/mockData";
import { MapPin, Briefcase, Clock, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="group relative bg-card hover:bg-secondary/20 border border-border/50 hover:border-primary/20 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-4">
            <img 
              src={job.logo} 
              alt={job.company} 
              className="w-12 h-12 rounded-lg object-contain bg-white border border-border p-1"
            />
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-secondary text-primary font-medium">
            {job.type}
          </Badge>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary/60" />
            {job.location}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <IndianRupee className="h-4 w-4 text-primary/60" />
            {job.salary}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary/60" />
            {job.postedAt}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {job.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground font-medium border border-border">
              {tag}
            </span>
          ))}
        </div>

        <Link href={`/jobs/${job.id}`}>
          <Button className="w-full bg-white text-primary border-2 border-primary/10 hover:border-primary hover:bg-primary hover:text-white font-semibold transition-all">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
