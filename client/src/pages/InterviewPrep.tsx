import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, Code2, Users, MessageSquare } from "lucide-react";

export default function InterviewPrep() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-primary/5 border-b border-border">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary">
                        Ace Your Interview
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        From technical questions to behavioral answers, get everything you need to crack your dream job interview.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                        <TabsTrigger value="technical" className="flex items-center gap-2">
                            <Code2 className="h-4 w-4" /> Technical
                        </TabsTrigger>
                        <TabsTrigger value="hr" className="flex items-center gap-2">
                            <Users className="h-4 w-4" /> HR & Behavioral
                        </TabsTrigger>
                        <TabsTrigger value="mock" className="flex items-center gap-2">
                            <BrainCircuit className="h-4 w-4" /> Mock Interviews
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="technical" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <div className="mb-2">
                                        <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">Data Structures</Badge>
                                    </div>
                                    <CardTitle>Top 50 DSA Questions</CardTitle>
                                    <CardDescription>
                                        Curated list of frequently asked DSA questions in product-based companies.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Arrays & Strings</li>
                                        <li>• Linked Lists & Trees</li>
                                        <li>• Dynamic Programming</li>
                                        <li>• Graphs & Recursion</li>
                                    </ul>
                                    <Button variant="link" className="px-0 mt-2 text-primary">Explore Questions &rarr;</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="mb-2">
                                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">System Design</Badge>
                                    </div>
                                    <CardTitle>System Design Basics</CardTitle>
                                    <CardDescription>
                                        Learn how to design scalable systems. Essential for SDE-2 and above, but good for freshers too.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Load Balancing</li>
                                        <li>• Caching Strategies</li>
                                        <li>• Database Sharding</li>
                                        <li>• CAP Theorem</li>
                                    </ul>
                                    <Button variant="link" className="px-0 mt-2 text-primary">View Guide &rarr;</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="hr" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageSquare className="h-5 w-5 text-primary" />
                                    Common HR Questions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Tell me about yourself.</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            The classic icebreaker. Keep it professional. Use the "Present, Past, Future" formula. Talk about your current role, your previous experience/education, and why you are interested in this position.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>What are your greatest strengths?</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            Choose strengths that are relevant to the job. Back them up with specific examples. E.g., "I am a strong problem solver. In my last project, I optimized the database query reducing load time by 40%."
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Where do you see yourself in 5 years?</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            Show ambition but stay grounded. Align your goals with the company's growth. E.g., "I hope to grow into a senior developer role, leading a team and contributing to major architectural decisions."
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Why should we hire you?</AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            Match your skills to the job description. Highlight what makes you unique—your passion, your quick learning ability, or a specific project that demonstrates your capability.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="mock">
                        <div className="bg-muted/30 border border-dashed border-border rounded-xl p-12 text-center">
                            <div className="mx-auto bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                                <BrainCircuit className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-2">AI Mock Interviews</h3>
                            <p className="text-muted-foreground max-w-md mx-auto mb-6">
                                Practice with our AI-powered interviewer. Get real-time feedback on your answers, body language, and tone.
                            </p>
                            <Button disabled>Coming Soon</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
