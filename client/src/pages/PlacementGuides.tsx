import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Building, Search, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const COMPANIES = [
    {
        name: "TCS",
        role: "Ninja / Digital",
        type: "Service Based",
        difficulty: "Easy - Medium",
        topics: ["Aptitude", "Basic Coding", "Communication"],
        logo: "T"
    },
    {
        name: "Infosys",
        role: "System Engineer",
        type: "Service Based",
        difficulty: "Easy - Medium",
        topics: ["Pseudocode", "Puzzle Solving", "English Verbal"],
        logo: "I"
    },
    {
        name: "Amazon",
        role: "SDE 1",
        type: "Product Based",
        difficulty: "Hard",
        topics: ["DSA", "Operating Systems", "Computer Networks"],
        logo: "A"
    },
    {
        name: "Accenture",
        role: "ASE / FSE",
        type: "Service Based",
        difficulty: "Easy - Medium",
        topics: ["Cognitive Ability", "Coding", "Communication"],
        logo: "A"
    },
    {
        name: "Capgemini",
        role: "Analyst",
        type: "Service Based",
        difficulty: "Easy",
        topics: ["Game Based Aptitude", "Behavioral", "English"],
        logo: "C"
    },
    {
        name: "Google",
        role: "Software Engineer",
        type: "Product Based",
        difficulty: "Very Hard",
        topics: ["Advanced DSA", "System Design", "Googlyness"],
        logo: "G"
    }
];

export default function PlacementGuides() {
    const [search, setSearch] = useState("");

    const filteredCompanies = COMPANIES.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.role.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-primary/5 border-b border-border">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary">
                        Company-Specific Guides
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Detailed placement processes, syllabus, and preparation strategies for top recruiters.
                    </p>

                    <div className="max-w-md mx-auto relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search company or role..."
                            className="pl-10 h-12 text-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCompanies.length > 0 ? (
                        filteredCompanies.map((company, index) => (
                            <Card key={index} className="hover:border-primary/50 transition-colors group cursor-pointer">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                                        {company.logo}
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{company.name}</CardTitle>
                                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                                            <Building className="h-3 w-3" />
                                            {company.type}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Role:</span>
                                        <span className="font-medium">{company.role}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Difficulty:</span>
                                        <span className={`font-medium ${company.difficulty.includes("Hard") ? "text-red-500" :
                                                company.difficulty.includes("Medium") ? "text-yellow-500" : "text-green-500"
                                            }`}>{company.difficulty}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Focus Areas</span>
                                        <div className="flex flex-wrap gap-2">
                                            {company.topics.map((t, i) => (
                                                <span key={i} className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-2">
                                    <Button variant="ghost" className="w-full group-hover:text-primary justify-between">
                                        Read Guide <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-muted-foreground">
                            No companies found matching "{search}".
                        </div>
                    )}
                </div>

                <div className="mt-16 bg-muted/30 border border-border rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold font-heading mb-4">Don't see your target company?</h2>
                    <p className="text-muted-foreground mb-6">
                        We add new placement guides every week based on student requests.
                    </p>
                    <Button variant="outline" className="gap-2">
                        Request a Guide <ExternalLink className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
