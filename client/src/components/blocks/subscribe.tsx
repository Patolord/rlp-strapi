"use client";
import type { SubscribeProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Subscribe({
  heading,
  subheading,
  input,
  buttonText,
}: Readonly<SubscribeProps>) {
  return (
    <section className="container mx-auto px-4 py-16 flex items-center justify-between">
      <div className="text-center space-y-4">
        <h4 className="text-3xl font-bold tracking-tight">{heading}</h4>
        <p className="text-muted-foreground text-lg">{subheading}</p>
      </div>
      <form className="max-w-md mx-auto mt-8 flex sm:flex-row gap-4">
        <Input
          name="email"
          type="email"
          placeholder={input}
          className="flex-1"
        />
        <Button type="submit" size="lg">
          {buttonText}
        </Button>
      </form>
    </section>
  );
}
