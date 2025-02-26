// app/lore/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Lore() {
  return (
    <main className="flex flex-col min-h-screen bg-[#E8D9C1] font-serif">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-transparent font-semibold text-lg">
        <Link href="/">
          <Image src="/logo.png" width={200} height={100} alt="Ravana Defense Logo" />
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="hover:text-[#FF8C00]">Home</Link>
          <Link href="/game" className="hover:text-[#FF8C00]">Game</Link>
          <Link href="/lore" className="hover:text-[#FF8C00]">Lore</Link>
          <Link href="/nft" className="hover:text-[#FF8C00]">NFT Collection</Link>
          <Link href="/about" className="hover:text-[#FF8C00]">About Us</Link>
        </div>
      </nav>

      {/* Lore Content */}
      <section className="flex-grow flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl italic font-bold mb-8">Lore</h1>
        <p className="max-w-3xl mx-auto text-xl italic leading-relaxed">
          As <strong>Ravana</strong>, you must command your legendary warriors—the Asura generals, the mystical Rakshasas, and the mighty sorcerers of Lanka—to build impenetrable defenses, summon ancient spells, and turn the tide of battle. Towers will rise, demons will fight, and Lanka's fate will rest in your hands. The world remembers Ravana as a villain. But history is written by the victors. Now, the power to rewrite fate is yours.
        </p>
        <p className="mt-6 text-center font-semibold">YakkunLabs</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="https://twitter.com"><Image src="/twitter.png" width={32} height={32} alt="Twitter" /></a>
          <a href="https://discord.com"><Image src="/discord.png" width={32} height={32} alt="Discord" /></a>
          <a href="https://twitch.tv"><Image src="/twitch.png" width={32} height={32} alt="Twitch" /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto w-full py-4 bg-[#E8D9C1] text-[#FF8C00] text-center font-semibold border-t-2 border-[#FF8C00]">
        © 2025 YakkunLabs. All rights reserved.
      </footer>
    </main>
  );
}