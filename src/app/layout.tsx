import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/common/Container";


const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Cats and Dogs Breed Explorer",
  description: "Get info about your pet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body className={`${roboto.className} antialiased`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
