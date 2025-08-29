"use client";
import { Toaster } from "@/components/UI/toaster";
import { Toaster as Sonner } from "@/components/UI/sonner";
import { TooltipProvider } from "@/components/UI/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function QueryProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
