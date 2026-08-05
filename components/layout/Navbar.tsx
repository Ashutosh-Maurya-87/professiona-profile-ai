import { navigation } from "@/constants/navigation";
import Container from "../ui/Container";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b bg-[#17181c]/90 backdrop-blur">
            <Container className="flex h-16 items-center justify-between">

                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#cf9a5f]" />
                    <span className="font-semibold tracking-wide">
                        AM
                    </span>
                </div>

                <div className="hidden gap-8 md:flex">
                    {
                        navigation.map((item) => (
                            <a key={item.id} href={item.href}>
                                {item.title}
                            </a>
                        ))
                    }
                    {/* <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a> */}
                </div>

                <a
                    href="mailto:yourmail@gmail.com"
                    className="rounded-full bg-white px-5 py-2 text-black"
                >
                    Get In Touch
                </a>

            </Container>
        </nav>
    );
}