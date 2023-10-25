import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Product from "@/components/Product/Product";

export default function Home() {
  return <main className="overflow-x-hidden">
    <Hero />
    <Category />
    <Product/>
  </main>;
}
