import RootProvider from "@/Redux/RootProvider";
import "./globals.css";

export const metadata = {
  title: "EssoryBD ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charset="utf-8" />
        <body className="max-w-[1440px] mx-auto relative scrollbar-thumb-orange-500 scrollbar-thin">
          <RootProvider>{children}</RootProvider>
        </body>
    </html>
  );
}
