import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, FileText, BarChart2, LineChart, Upload, ArrowRight } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import FeatureCard from "../components/FeatureCard";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 md:px-6">
        <nav aria-label="Main navigation">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-10 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h1 className="text-2xl font-bold">PrepBuddy</h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="hidden md:flex gap-8">
              <a href="#features" className="text-white hover:text-gray-300">Features</a>
                <Link to="/" className="text-white hover:text-gray-300" aria-label="View pricing">Pricing</Link>
                <Link to="/" className="text-white hover:text-gray-300" aria-label="About us">About</Link>
              </div>
              <div className="flex gap-2">
                <Link to="/login" className="px-4 py-2 text-white hover:text-gray-300" aria-label="Login">Login</Link>
                <Link to="/signup" className="px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-700 hover:!text-gray-300" aria-label="Register">Register</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>

        
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="text-purple-500 font-semibold mb-4">AI-Powered Interview Preparation</div>
                <h2 className="text-5xl font-bold mb-6">
                  Master Your Interviews with <span className="text-purple-500">PrepBuddy</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Practice with AI, get personalized feedback, and track your progress to land your dream job.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                <Link
  to="/register"
  className="group !px-6 !py-3 !bg-purple-600 !rounded-md !text-white hover:!bg-purple-700 flex gap-2 items-center justify-center !text-lg !font-semibold !transition-all !duration-300"
>
 
  Get Started Free
  <ArrowRight className="!mr-2 !size-5 !transform !transition-transform !duration-300 group-hover:!translate-x-1" />
</Link>

                  <Link to="/demo" className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-md text-white hover:bg-gray-800 flex items-center justify-center">
                    Watch Demo
                  </Link>
                </div>
                <p className="text-gray-500 mt-4">No credit card required • Free plan available</p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-2 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="size-10 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <p>Hello! I'm your PrepBuddy AI assistant. What type of interview would you like to practice today?</p>
                      </div>
                    </div>
                    <div className="flex justify-end mb-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-600 p-4 rounded-lg">
                          <p>I have a software engineering interview next week.</p>
                        </div>
                        <div className="size-10 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-bold">U</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="size-10 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <p>Great! I'll prepare some technical and behavioral questions for a software engineering role. Would you like to focus on any specific technologies?</p>
                      </div>
                    </div>
                    <div className="flex justify-end mb-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-600 p-4 rounded-lg">
                          <p>Yes, I'd like to focus on React and Node.js.</p>
                        </div>
                        <div className="size-10 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center">
                          <span className="text-white font-bold">U</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="size-10 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <p>Perfect! Let's start with a React question. Can you explain the concept of hooks in React and give examples of some commonly used hooks?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section aria-labelledby="features-heading" className="py-20 px-4 md:px-6 bg-gray-900" id="features">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Ace Your Interviews with AI
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                PrepBuddy offers cutting-edge AI technology to help you prepare for job interviews, track your progress,
                and improve your performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Mic className="size-8" />}
                title="Voice Assistant Interviews"
                description="Practice with our AI voice assistant that simulates real interview scenarios and provides instant feedback."
              />
              <FeatureCard
                icon={<FileText className="size-8" />}
                title="Personalized Interviews"
                description="Create custom interview sessions tailored to your industry, role, and experience level."
              />
              <FeatureCard
                icon={<BarChart2 className="size-8" />}
                title="Performance Reports"
                description="Get detailed reports on your interview performance with actionable insights to improve."
              />
              <FeatureCard
                icon={<LineChart className="size-8" />}
                title="Progress Dashboard"
                description="Track your improvement over time with our comprehensive analytics dashboard."
              />
              <FeatureCard
                icon={<Upload className="size-8" />}
                title="Resume-Based Interviews"
                description="Upload your resume and get interview questions specifically tailored to your experience."
              />
              <div className="md:col-span-2 lg:col-span-1">
                <FeatureCard
                  icon={<ArrowRight className="size-8" />}
                  title="Get Started Today"
                  description="Sign up now to access all features and start preparing for your next interview."
                  isCallToAction={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section aria-labelledby="testimonials-heading" className="py-20 px-4 md:px-6 bg-black">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Success Stories
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how PrepBuddy has helped candidates land their dream jobs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[ 
                { initials: "JD", name: "John Doe", role: "Software Engineer", text: `"PrepBuddy helped me prepare for my technical interviews at top tech companies. The personalized feedback was invaluable!"` },
                { initials: "AS", name: "Alice Smith", role: "Product Manager", text: `"The voice assistant feature made my interview practice feel like the real thing. I was much more confident during my actual interviews."` },
                { initials: "RJ", name: "Robert Johnson", role: "Data Scientist", text: `"The analytics dashboard helped me identify my weak areas and focus my preparation. I landed my dream job after just 3 weeks of using PrepBuddy!"` }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                      <span className="font-semibold text-purple-300">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading" className="py-20 px-4 md:px-6 bg-purple-600 text-white">
          <div className="container mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join thousands of job seekers who have improved their interview skills with PrepBuddy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="px-6 py-3 bg-black text-purple-600 rounded-md hover:bg-gray-100">Login</Link>
              <Link to="/signup" className="px-6 py-3 bg-transparent border border-white rounded-md hover:bg-purple-700">Start Free Trial</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="size-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <h3 className="text-xl font-bold">PrepBuddy</h3>
              </div>
              <p className="text-gray-400">
                AI-powered interview preparation platform to help you land your dream job.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link to="/features#voice" className="text-gray-400 hover:text-white">Voice Assistant</Link></li>
                <li><Link to="/features#personalized" className="text-gray-400 hover:text-white">Personalized Interviews</Link></li>
                <li><Link to="/features#reports" className="text-gray-400 hover:text-white">Performance Reports</Link></li>
                <li><Link to="/features#dashboard" className="text-gray-400 hover:text-white">Progress Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PrepBuddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;