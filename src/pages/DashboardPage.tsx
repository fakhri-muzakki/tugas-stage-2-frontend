import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <main className="h-screen bg-background text-foreground flex items-center justify-center">
      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to Back {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Discover the best products with modern design and great quality.
          </p>
          <Link to="/products">
            <Button size="lg">Shop Now</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
