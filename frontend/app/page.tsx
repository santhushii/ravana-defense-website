// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#F5EAD3] font-sans">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-black font-semibold text-lg">
        <Image src="/logo.png" width={200} height={100} alt="Ravana Defense Logo" />
        <div className="flex gap-6">
          <Link href="/" className="hover:text-[#FF8C00]">Home</Link>
          <Link href="/nft" className="hover:text-[#FF8C00]">NFT Collection</Link>
          <Link href="/game" className="hover:text-[#FF8C00]">Game</Link>
          <Link href="/lore" className="hover:text-[#FF8C00]">Lore</Link>
          
          <Link href="/about" className="hover:text-[#FF8C00]">About Us</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full bg-cover bg-center py-64 flex flex-col items-center justify-center" style={{ backgroundImage: "url('/background_image.png')" }}>
        <Image src="/logo.png" width={500} height={160} alt="Ravana Defense Logo" />
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-4 px-12 rounded-lg text-2xl font-bold transition">
          Play Now
        </button>
      </section>

      {/* NFT Collection */}
      <section className="w-full py-12 bg-[#E8D9C1] text-center">
        <h2 className="text-3xl font-bold mb-8">NFT Collection</h2>
        <div className="flex justify-center flex-wrap gap-6">
          <Image src="/nft/nft1.png" width={100} height={100} alt="NFT 1" />
          <Image src="/nft/nft2.png" width={100} height={100} alt="NFT 2" />
          <Image src="/nft/nft3.png" width={100} height={100} alt="NFT 3" />
          <Image src="/nft/nft4.png" width={100} height={100} alt="NFT 4" />
          <Image src="/nft/nft5.png" width={100} height={100} alt="NFT 5" />
          <Image src="/nft/nft6.png" width={100} height={100} alt="NFT 6" />
        </div>
      </section>

      {/* Lore Section */}
      <section className="bg-[#E8D9C1] py-12 px-6 w-full text-center font-serif italic">
        <h2 className="text-3xl font-bold mb-4">Lore</h2>
        <p className="max-w-2xl mx-auto text-lg">
          As <strong>Ravana</strong>, you must command your legendary warriors—the Asura generals,
          the mystical Rakshasas, and the mighty sorcerers of Lanka—to build impregnable defenses, summon ancient spells, and turn the tide of battle. Towers will rise, demons will fight, and Lanka's fate will rest in your hands. The world remembers Ravana as a villain. But history is written by the victors. Now, the power to rewrite fate is yours.
        </p>
        <p className="mt-4 font-semibold">YakkunLabs</p>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-[#E8D9C1] text-[#FF8C00] text-center font-semibold border-t-2 border-[#FF8C00]">
        Footer
      </footer>
    </main>
  );
}
