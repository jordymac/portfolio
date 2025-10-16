import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold text-foreground">
            Want to get in touch?
          </h2>
          <p className="text-muted-foreground">Send me an email.</p>
          <a
            href="mailto:jordy.mcintyre@gmail.com?subject=Just Reaching Out"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium"
          >
            Contact
          </a>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/jordymac/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/jordy-mcintyre/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
