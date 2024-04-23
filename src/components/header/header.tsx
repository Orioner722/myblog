import Link from "@/components/link/link";
import Image from "next/image";
import HomeLink from "../homeLink/homeLink";

export default function Header() {
  return (
    <header className="mb-14 flex flex-row place-content-between">
      <HomeLink />

      <span className="relative top-[4px] italic">
        by
        <Link
          target="_blank"
          className="scale-100 active:scale-100"
          href="https://github.com/Orioner722"
        >
          <Image
            width={32}
            height={32}
            alt="Orioner722"
            src="https://avatars.githubusercontent.com/u/76165623?u=4e9cd6498ca4ebabb6ee7df94de2469af7d43353&v=4"
            className="relative -top-1 mx-2 inline h-8 w-8 rounded-full"
          />
        </Link>
      </span>
    </header>
  );
}
