import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Principles } from "@/components/Principles";
import { Capabilities } from "@/components/Capabilities";
import { Team } from "@/components/Team";
import { Works } from "@/components/Works";
import { Application } from "@/components/Application";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Manifesto />
      <Principles />
      <Capabilities />
      <Works />
      <Team />
      <Application />
    </main>
  );
}





