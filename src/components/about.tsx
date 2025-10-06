import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a senior computer science student at the University of
                Virginia with a passion for building elegant solutions to
                complex problems. My journey in software engineering began with
                a curiosity about how things work, which has evolved into a deep
                commitment to creating impactful technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in full-stack development, with experience in
                modern frameworks and cloud technologies. I&apos;m particularly
                interested in distributed systems, API design, and creating
                seamless user experiences.
              </p>
            </div>
            <div className="flex justify-center align-middle">
              <Image
                src="./FullSizeRender.jpeg"
                width={300}
                height={0}
                alt="Michael He"
              />
            </div>

            <Card className="p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  <span>B.S. in Computer Science, Expected May 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  <span>GPA: 3.94/4.00</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▹</span>
                  <span>Dean&apos;s List: Fall 2022 - Spring 2025</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
