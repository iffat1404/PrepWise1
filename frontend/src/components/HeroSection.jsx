import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Replace with your routing method

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-background to-muted/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 size-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 size-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              AI-Powered Interview Preparation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Master Your Interviews with <span className="text-primary">PrepBuddy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Practice with AI, get personalized feedback, and track your progress to land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">
                <Link to="/register" className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/demo">Watch Demo</Link>
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              No credit card required • Free plan available
            </div>
          </div>

          <div className="bg-card rounded-xl border shadow-xl overflow-hidden">
            <div className="p-1 bg-muted">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500" />
                <div className="size-3 rounded-full bg-yellow-500" />
                <div className="size-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AI</span>
                </div>
                <div className="bg-muted p-3 rounded-lg text-sm max-w-[80%]">
                  Hello! I'm your PrepBuddy AI assistant. What type of interview would you like to practice today?
                </div>
              </div>

              <div className="flex items-center justify-end gap-4">
                <div className="bg-primary p-3 rounded-lg text-sm text-primary-foreground max-w-[80%]">
                  I have a software engineering interview next week.
                </div>
                <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-bold">U</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AI</span>
                </div>
                <div className="bg-muted p-3 rounded-lg text-sm max-w-[80%]">
                  Great! I'll prepare some technical and behavioral questions for a software engineering role. Would you
                  like to focus on any specific technologies?
                </div>
              </div>

              <div className="flex items-center justify-end gap-4">
                <div className="bg-primary p-3 rounded-lg text-sm text-primary-foreground max-w-[80%]">
                  Yes, I'd like to focus on React and Node.js.
                </div>
                <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-bold">U</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AI</span>
                </div>
                <div className="bg-muted p-3 rounded-lg text-sm max-w-[80%]">
                  Perfect! Let's start with a React question. Can you explain the concept of hooks in React and give
                  examples of some commonly used hooks?
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">10,000+</div>
            <div className="text-muted-foreground">Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Companies</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
