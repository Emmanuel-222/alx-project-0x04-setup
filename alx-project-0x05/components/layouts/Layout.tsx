import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interface";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={montserrat.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;