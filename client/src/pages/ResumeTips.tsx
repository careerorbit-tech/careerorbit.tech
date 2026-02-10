import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FileText, CheckCircle2, User, Phone, Mail, Award, Briefcase } from "lucide-react";

export default function ResumeTips() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-primary/5 border-b border-border">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary">
                        Master Your Resume
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Craft a resume that stands out. Learn the essential tips and tricks to get shortlisted for top companies.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
                                <FileText className="h-6 w-6 text-primary" />
                                Must-Have Sections
                            </h2>
                            <div className="grid gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <User className="h-4 w-4 text-muted-foreground" />
                                            Contact Information
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-muted-foreground">
                                        Ensure your name, phone number, professional email, and LinkedIn profile are clearly visible at the top. Avoid full addresses; city and state are sufficient.
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                                            Experience & Projects
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-muted-foreground">
                                        Use bullet points to describe your roles. Focus on achievements rather than duties (e.g., "Increased sales by 20%" vs. "Responsible for sales").
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <Award className="h-4 w-4 text-muted-foreground" />
                                            Skills & Education
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-muted-foreground">
                                        List relevant technical and soft skills. For education, include your degree, institution, and graduation year. Mention GPA only if it's exceptional (&gt;3.5/4.0 or &gt;8.5/10).
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                                Pro Tips for Freshers
                            </h2>
                            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                                <div className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="font-bold text-primary">1</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Tailor Your Resume</h3>
                                        <p className="text-muted-foreground text-sm">Customize your resume for each job description. Use keywords from the JD.</p>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="font-bold text-primary">2</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Keep it Concise</h3>
                                        <p className="text-muted-foreground text-sm">Stick to one page if you have less than 5 years of experience. Recruiters scan resumes in seconds.</p>
                                    </div>
                                </div>
                                <Separator />
                                <div className="flex gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="font-bold text-primary">3</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Proofread</h3>
                                        <p className="text-muted-foreground text-sm">Typos can be a deal-breaker. Use tools like Grammarly and ask a friend to review it.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-muted/30 border border-border rounded-xl p-6">
                                <h3 className="font-heading font-semibold text-lg mb-4">Quick Checklist</h3>
                                <ScrollArea className="h-[300px] pr-4">
                                    <ul className="space-y-3">
                                        {[
                                            "Correct Contact Info",
                                            "Professional Summary (Optional)",
                                            "Education Details",
                                            "Reverse Chronological Work History",
                                            "Action Verbs utilized",
                                            "Quantifiable Achievements",
                                            "Relevant Skills Section",
                                            "Formatting Consistency",
                                            "PDF Format Saved",
                                            "Filename: Name_Role_Resume.pdf"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                                <h3 className="font-heading font-semibold text-lg mb-2 text-primary">Need Help?</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Connect with our mentors for a personalized resume review session.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-sm text-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span>support@careerorbit.tech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
