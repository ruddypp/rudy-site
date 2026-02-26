export default function Navbar() {
    return (
        <nav className="container mx-auto flex items-center justify-between px-6 py-8">
            <div className="text-2xl font-bold tracking-tight">
                Ruddypp<span className="text-brand-purple">.</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-bold">
                <a href="#" className="hover:text-brand-purple transition-colors">Home</a>
                <a href="#" className="hover:text-brand-purple transition-colors">About</a>
                <a href="#" className="hover:text-brand-purple transition-colors">Experience</a>
                <a href="#" className="hover:text-brand-purple transition-colors">Education</a>
                <a href="#" className="hover:text-brand-purple transition-colors">Projects</a>
                <a href="#" className="hover:text-brand-purple transition-colors">Contact</a>
            </div>
            <button className="rounded-full bg-brand-navy px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-black">
                Let's Talk
            </button>
        </nav>
    );
}
