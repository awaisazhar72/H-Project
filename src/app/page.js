import Navbar from "./component/navbar/page";
import ProductHunter from "./component/productHunter/page";
import Sidebar from "./component/sidebar/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <ProductHunter />
    </main>
  );
}
