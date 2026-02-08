import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { JOBS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter } from "lucide-react";

export default function Jobs() {
  return (
    <div className="min-h-screen flex flex-col bg-muted/10 font-sans">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filter - Mock */}
          <aside className="w-full md:w-64 space-y-8 h-fit sticky top-24 hidden md:block">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters
              </h3>
              
              <div className="space-y-4 p-4 bg-card border border-border rounded-xl">
                <div>
                  <h4 className="font-medium mb-3 text-sm">Job Type</h4>
                  <div className="space-y-2">
                    {['Full Time', 'Internship', 'Contract', 'Freelance'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <label htmlFor={type} className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border my-4" />

                <div>
                  <h4 className="font-medium mb-3 text-sm">Experience</h4>
                  <div className="space-y-2">
                    {['Fresher', '0-1 Years', '1-3 Years', '3+ Years'].map((exp) => (
                      <div key={exp} className="flex items-center space-x-2">
                        <Checkbox id={exp} />
                        <label htmlFor={exp} className="text-sm text-muted-foreground leading-none">
                          {exp}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-8 space-y-4">
              <h1 className="text-3xl font-bold font-heading text-foreground">Latest Job Openings</h1>
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search jobs, skills, or companies..." className="pl-10 bg-white" />
                </div>
                <Button className="bg-primary text-white">Search</Button>
              </div>
            </div>

            <div className="grid gap-4">
              {JOBS.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
              {/* Duplicate for demo volume */}
              {JOBS.map((job) => (
                <JobCard key={`${job.id}-dup`} job={{...job, id: `${job.id}-dup`}} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg" className="w-full md:w-auto">Load More Jobs</Button>
            </div>
          </main>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
