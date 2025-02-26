// app/nft/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function NFTCollection() {
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

      {/* NFT Collection Section */}
      <section className="flex-grow flex flex-col items-center justify-center py-20 bg-[#E8D9C1] w-full">
        <h1 className="text-5xl font-bold mb-12 font-serif italic">NFT Collection</h1>
        <div className="grid grid-cols-3 gap-8 justify-center">
          <Image src="/nft/nft1.png" width={250} height={250} alt="NFT 1" />
          <Image src="/nft/nft2.png" width={250} height={250} alt="NFT 2" />
          <Image src="/nft/nft3.png" width={250} height={250} alt="NFT 3" />
          <Image src="/nft/nft4.png" width={250} height={250} alt="NFT 4" />
          <Image src="/nft/nft5.png" width={250} height={250} alt="NFT 5" />
          <Image src="/nft/nft6.png" width={250} height={250} alt="NFT 6" />
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
