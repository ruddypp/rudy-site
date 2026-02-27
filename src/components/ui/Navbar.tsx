import { AnimatedThemeToggler } from "./animated-theme-toggler";

export default function Navbar() {
    return (
        <nav className="container mx-auto flex items-center justify-between px-6 py-8">
            <div className="text-2xl font-bold tracking-tight text-brand-navy dark:text-white">
                Ruddypp<span className="text-brand-purple">.</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-bold text-brand-navy/80 dark:text-white/80">
                <a href="#" className="hover:text-brand-purple dark:hover:text-brand-purple transition-colors">Home</a>
                <a href="#" className="hover:text-brand-purple dark:hover:text-brand-purple transition-colors">About</a>
                <a href="#" className="hover:text-brand-purple dark:hover:text-brand-purple transition-colors">Experience</a>
                <a href="#" className="hover:text-brand-purple dark:hover:text-brand-purple transition-colors">Projects</a>
                <a href="#" className="hover:text-brand-purple dark:hover:text-brand-purple transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
                <AnimatedThemeToggler className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-navy/5 text-brand-navy hover:bg-brand-navy/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-all" />
                <button className="rounded-full bg-brand-navy px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-black dark:bg-white dark:text-brand-navy dark:hover:bg-gray-200">
                    Let's Talk
                </button>
            </div>
        </nav>
    );
}
