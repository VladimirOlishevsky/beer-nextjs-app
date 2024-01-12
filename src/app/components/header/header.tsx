import Link from "next/link";
import "./styles.css"

export const Header = () => {
    return (
        <div className="header">
            <Link href={"/"}>Home</Link>
            <Link href={"/beers"}>Beers</Link>
            <Link href={"/about"}>About</Link>
        </div>
    )
}