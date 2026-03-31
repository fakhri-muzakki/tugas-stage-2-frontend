import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function About() {
  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            About This Project
          </h1>
          <p className="text-muted-foreground">
            A simple example using React, Tailwind, and shadcn/ui with modern
            best practices.
          </p>
        </div>

        {/* Card: Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>What this project is about</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              This project demonstrates how to build a scalable frontend using
              modern tools like React, Vite, Tailwind CSS, and shadcn/ui. It
              focuses on clean architecture, reusable components, and
              maintainable styling.
            </p>
          </CardContent>
        </Card>

        {/* Card: Tech Stack */}
        <Card>
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
            <CardDescription>Technologies used in this project</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>React</li>
              <li>React Router</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui</li>
            </ul>
          </CardContent>
        </Card>

        {/* Card: Purpose */}
        <Card>
          <CardHeader>
            <CardTitle>Purpose</CardTitle>
            <CardDescription>Why this project exists</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The purpose of this project is to serve as a foundation for
              building modern web applications with good structure and best
              practices used in real-world development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
