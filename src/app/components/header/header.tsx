import Image from "next/image";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Olá, sou Danton!</h1>
        <h2>
          Systems Developer<br></br>
        </h2>
      </div>
      <Image
        src="/Me.png"
        alt="Vercel Logo"
        width={325}
        height={277}
        priority
      />
    </div>
  );
}
