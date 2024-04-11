import Header from "./header";
import Dashboard from "./dashboard";

import SavedProduct from "@/app/savedProduct";
import Electronics from "@/electronics";
import Footer from "./footer";
import Footer2 from "./footer2";
export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <Electronics />
      <Footer />
      <Footer2 />
    </>
  );
}
