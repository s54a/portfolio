import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="relative rounded-xl border p-10">
      <div className="bg-primary absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border px-4 py-1">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>

      <div className="absolute inset-0 top-0 right-0 left-0 h-1/2 overflow-hidden rounded-xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let’s Work Together
        </h2>

        <p className="text-muted-foreground mx-auto max-w-lg">
          Open to opportunities. The fastest way to reach me is via{" "}
          <a
            href="mailto:hi@s54a.in"
            className="text-blue-500 underline-offset-4 hover:underline"
          >
            hi@s54a.in
          </a>
          .
        </p>

        <p className="text-muted-foreground mx-auto max-w-lg">
          You can also reach out on{" "}
          <Link
            href="https://x.com/s54a__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline-offset-4 hover:underline"
          >
            X (Twitter) @s54a__
          </Link>
        </p>

        {/* Optional: Add this only if you want direct calls */}
        {/*
        <p className="text-muted-foreground">
          Phone: <span className="font-medium">+91 88892 83873</span>
        </p>
        */}
      </div>
    </div>
  );
}
