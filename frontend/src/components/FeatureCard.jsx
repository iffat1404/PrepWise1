import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // If you're using React Router

export default function FeatureCard({ icon, title, description, isCallToAction = false }) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-1">
        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {isCallToAction && (
        <CardFooter>
          <Button className="w-full" asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
