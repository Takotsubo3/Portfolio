import Image from "next/image";
import Nav from "../components/Nav/Nav";
import HomePage from "./Home/Home";


export default function Home() {
  return (
    <div >
      <main>
        <Nav/>
        <HomePage/>
      </main>
    </div>
  );
}
