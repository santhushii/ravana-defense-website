// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#F5EAD3] font-sans">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-2 text-black font-semibold text-xl">
        <Image src="/logo.png" width={200} height={100} alt="Ravana Defense Logo" />
        <div className="flex gap-8">
          <Link href="/" className="hover:text-[#FF8C00]">Home</Link>
          <Link href="/game" className="hover:text-[#FF8C00]">Game</Link>
          <Link href="/lore" className="hover:text-[#FF8C00]">Lore</Link>
          <Link href="/nft" className="hover:text-[#FF8C00]">NFT Collection</Link>
          <Link href="/about" className="hover:text-[#FF8C00]">About Us</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full bg-cover bg-center py-48 flex flex-col items-center justify-center" style={{ backgroundImage: "url('/background_image.png')" }}>
        <Image src="/logo.png" width={500} height={200} alt="Ravana Defense Logo" />
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-10 rounded-lg text-2xl font-semibold transition">
          Play Now
        </button>
      </section>

      {/* Social Icons */}
      <section className="flex justify-center items-center gap-4 my-6">
        <a href="https://twitter.com">
          <Image src="/twitter.png" width={32} height={32} alt="Twitter" />
        </a>
        <a href="https://discord.com">
          <Image src="/discord.png" width={32} height={32} alt="Discord" />
        </a>
        <a href="https://twitch.tv">
          <Image src="/twitch.png" width={32} height={32} alt="Twitch" />
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-[#E8D9C1] text-[#FF8C00] text-center font-semibold border-t-2 border-[#FF8C00]">
        © 2025 YakkunLabs. All rights reserved.
      </footer>
    </main>
  );
}
