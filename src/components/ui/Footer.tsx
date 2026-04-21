export default function Footer() {
    return (
        <footer className="container mx-auto px-6 pt-4 pb-10 lg:pb-14">
            <div className="max-w-6xl mx-auto border-t border-brand-purple/12 pt-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-lg font-bold tracking-tight text-brand-navy dark:text-white">
                            Ruddypp<span className="text-brand-purple">.</span>
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-brand-navy/70 dark:text-white/70">
                        <a href="#home" className="transition-colors hover:text-brand-purple">Home</a>
                        <a href="#projects" className="transition-colors hover:text-brand-purple">Projects</a>
                        <a href="#contact" className="transition-colors hover:text-brand-purple">Contact</a>
                        <a href="mailto:paningalrudy@gmail.com" className="transition-colors hover:text-brand-purple">
                            paningalrudy@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
