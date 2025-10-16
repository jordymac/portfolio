import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="JM Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>

        {/* Contact Button */}
        <a
          href="mailto:jordy.mcintyre@gmail.com"
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
