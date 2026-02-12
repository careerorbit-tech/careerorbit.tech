import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { JOBS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter } from "lucide-react";

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);

  const toggleFilter = (item: string, current: string[], setter: (val: string[]) => void) => {
    if (current.includes(item)) {
      setter(current.filter(i => i !== item));
    } else {
      setter([...current, item]);
    }
  };

  const filteredJobs = useMemo(() => {
    return JOBS.filter(job => {
      // Search Filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchLower));

      // Job Type Filter
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);

      // Experience Filter (Matching logic based on job tags or data)
      // Note: In a real app, 'experience' should be a normalized field. 
      // Here we check if any selected experience keyword matches the job description or batch logic roughly,
      // or we can strictly match if we add an 'experience' field to mockData.
      // For now, let's assume 'batch' or 'tags' covers some experience, 
      // but ideally we need an 'experienceLevel' field. 
      // I will map the filter labels to checks on the job data.

      let matchesExperience = true;
      if (selectedExperience.length > 0) {
        matchesExperience = selectedExperience.some(exp => {
          if (exp === "Fresher") return job.tags.includes("Freshers") || job.tags.includes("Internship");
          if (exp === "0-1 Years") return job.tags.includes("Freshers") || job.requirements.some(r => r.includes("0-1") || r.includes("0-2"));
          // Fallback for demo: if no explicit field, show all or rely on tags
          return true;
        });
      }

      return matchesSearch && matchesType && matchesExperience;
    });
  }, [searchQuery, selectedTypes, selectedExperience]);

  return (
    <div className="min-h-screen flex flex-col bg-muted/10 font-sans">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar Filter - Desktop */}
          <aside className="w-full md:w-64 space-y-8 h-fit sticky top-24 hidden md:block">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters
              </h3>

              <div className="space-y-4 p-4 bg-card border border-border rounded-xl shadow-sm">
                <div>
                  <h4 className="font-medium mb-3 text-sm">Job Type</h4>
                  <div className="space-y-2">
                    {['Full Time', 'Internship', 'Contract', 'Freelance'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`desktop-${type}`}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                        />
                        <label htmlFor={`desktop-${type}`} className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
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
                        <Checkbox
                          id={`desktop-${exp}`}
                          checked={selectedExperience.includes(exp)}
                          onCheckedChange={() => toggleFilter(exp, selectedExperience, setSelectedExperience)}
                        />
                        <label htmlFor={`desktop-${exp}`} className="text-sm text-muted-foreground leading-none cursor-pointer">
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
            <div className="mb-8 space-y-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Latest Job Openings</h1>
                <p className="text-muted-foreground">Find your next career move curated daily.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search jobs, skills, or companies..."
                    className="pl-10 bg-white h-11"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="bg-primary text-white h-11 px-6 flex-1 sm:flex-none">Search</Button>

                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    className="md:hidden h-11 border-primary/20"
                    onClick={() => {
                      const filterEl = document.getElementById('mobile-filters');
                      if (filterEl) filterEl.classList.toggle('hidden');
                    }}
                  >
                    <Filter className="h-4 w-4 mr-2" /> Filter
                  </Button>
                </div>
              </div>

              {/* Mobile Filter Section (Hidden by default) */}
              <div id="mobile-filters" className="hidden md:hidden p-4 bg-white border border-border rounded-xl space-y-6 animate-in slide-in-from-top-2 duration-200">
                <div>
                  <h4 className="font-semibold mb-3">Job Type</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Full Time', 'Internship', 'Contract', 'Freelance'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-${type}`}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                        />
                        <label htmlFor={`mobile-${type}`} className="text-sm text-muted-foreground cursor-pointer">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Experience</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Fresher', '0-1 Years', '1-3 Years', '3+ Years'].map((exp) => (
                      <div key={exp} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-${exp}`}
                          checked={selectedExperience.includes(exp)}
                          onCheckedChange={() => toggleFilter(exp, selectedExperience, setSelectedExperience)}
                        />
                        <label htmlFor={`mobile-${exp}`} className="text-sm text-muted-foreground cursor-pointer">
                          {exp}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  No jobs found matching your criteria.
                </div>
              )}
            </div>

            {filteredJobs.length > 0 && (
              <div className="mt-12 flex justify-center">
                <Button variant="outline" size="lg" className="w-full md:w-auto">Load More Jobs</Button>
              </div>
            )}
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
}
