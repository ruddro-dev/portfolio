import { Outfit, Ovo } from "next/font/google"; // Import fonts
import "./globals.css";

// Define fonts at the module level
const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Protap Ruddrodeb Sarker",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfitFont.className} ${ovoFont.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
