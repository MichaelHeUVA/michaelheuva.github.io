import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I&apos;m currently looking for new opportunities and my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
          </div>

          <Card className="max-w-xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-card-foreground">
                Let&apos;s Connect
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="justify-start h-auto py-4 bg-transparent"
                >
                  <a
                    href="mailto:michaelheinternships@gmail.com?subject=Hello"
                    className="flex items-center gap-3"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">
                        michaelheinternships@gmail.com
                      </div>
                    </div>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="justify-start h-auto py-4 bg-transparent"
                >
                  <a
                    href="https://www.linkedin.com/in/michael--he/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">
                        linkedin.com/in/alexjohnson
                      </div>
                    </div>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="justify-start h-auto py-4 bg-transparent"
                >
                  <a
                    href="https://github.com/MichaelHeUVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm text-muted-foreground">
                        github.com/alexjohnson
                      </div>
                    </div>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="justify-start h-auto py-4 bg-transparent"
                >
                  <a
                    href="/resumes/Michael_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Resume</div>
                      <div className="text-sm text-muted-foreground">
                        Download PDF
                      </div>
                    </div>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
