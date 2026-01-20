import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Subscribe = () => {
  return (
    <div className="py-4 sm:py-6 md:py-10 border-b">
      <div className="grid items-center gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h6 className="text-2xl font-semibold">Subscribe to newsletter</h6>
          <p className="text-muted-foreground">{`We'll send you a friendly note once a week—no spam, just good vibes!`}</p>
        </div>
        <div className="flex gap-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit" className="main-button">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
