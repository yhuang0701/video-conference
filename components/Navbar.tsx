import Image from "next/image"
import Link from "next/link"
import MobileNav from "./MobileNav"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6
    py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="icons/logo.svg"
          width={32}
          height={32}
          alt="Video Logo"
          className="max-sm:size-10"
        />
        <p className="text-white text-[26px] font-extrabold max-sm:hidden">
          VideoUs
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>

    </nav>
  )
}
export default Navbar