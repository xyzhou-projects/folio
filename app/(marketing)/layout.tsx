import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
