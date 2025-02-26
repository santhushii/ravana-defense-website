// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen bg-[#E8D9C1] font-sans items-center">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-transparent font-semibold text-lg">
        <Link href="/">
          <Image src="/logo.png" width={200} height={100} alt="Ravana Defense Logo" />
        </Link>
        <div className="flex gap-8 text-black font-semibold">
          <Link href="/" className="hover:text-[#FF8C00]">Home</Link>
          <Link href="/game" className="hover:text-[#FF8C00]">Game</Link>
          <Link href="/lore" className="hover:text-[#FF8C00]">Lore</Link>
          <Link href="/nft" className="hover:text-[#FF8C00]">NFT Collection</Link>
          <Link href="/about" className="hover:text-[#FF8C00]">About Us</Link>
        </div>
      </nav>

      {/* About Us Content */}
      <section className="flex-grow flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold mb-12">About YakkunLabs</h1>
        <div className="max-w-3xl text-center space-y-6 text-xl">
          <p>
            Welcome to <strong>YakkunLabs</strong>, a cutting-edge gaming studio dedicated to crafting immersive experiences that bridge mythology and interactive entertainment. Our flagship game, <em>Ravana Defense</em>, draws inspiration from ancient stories, blending them seamlessly into captivating gameplay.
          </p>
          <p>
            At YakkunLabs, we believe in pushing the boundaries of creativity and technology. Our team of passionate developers, artists, and storytellers work tirelessly to bring unique and memorable worlds to life.
          </p>
          <p>
            Join our community and become part of the journey to rewrite legends and forge new stories.
          </p>
        </div>
      </section>

      {/* Social Icons */}
      <section className="flex justify-center gap-4 my-6">
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
