import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground font-mono">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Michael He
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground text-balance">
              I build software that matters.
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I&apos;m a computer science student specializing in software
            engineering, passionate about creating efficient, scalable
            solutions. Currently focused on full-stack development and cloud
            technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/MichaelHeUVA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/michael--he/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:michaelheinternships@gmail.com?subject=Hello"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="/resumes/Michael_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="h-6 w-6" />
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
