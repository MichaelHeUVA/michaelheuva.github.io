import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExperienceList } from "@/utils/constants";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Experience
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
            <p className="text-muted-foreground max-w-2xl">
              My professional journey and academic background in software
              engineering.
            </p>
          </div>

          <div className="space-y-6">
            {ExperienceList.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <a
                        className="h-10 w-10 flex"
                        href={exp.link}
                        target="_blank"
                        aria-label="Website"
                      >
                        <Image
                          src={exp.svg || ""}
                          height={50}
                          width={50}
                          alt=""
                        />
                      </a>
                      <div className="flex-1 space-y-1">
                        <CardTitle className="text-card-foreground">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {exp.company} • {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements?.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
