import { navigation } from "@/constants/navigation";
import Container from "../ui/Container";

export default function Navbar() {
    return (
        <nav>
            <div className="wrap">
                <div className="logo"><span className="logo-dot"></span>AM</div>
                <div className="nav-links">
                    {
                        navigation.map((item) => (
                            <a key={item.id} href={item.href}>
                                {item.title}
                            </a>
                        ))
                    }
                </div>
                <a className="nav-cta" href="mailto:ashumaurya486@gmail.com">Get in touch</a>
            </div>
        </nav>
    );
}