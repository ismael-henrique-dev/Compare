import Image from "next/image";
import Link from "next/link";

// Importação das imagens (certifique-se que os caminhos estão corretos)
import terabyteImg from "../../assets/stores/terabyte.png";
import pichauImg from "../../assets/stores/pichau.png";
import aliexpressImg from "../../assets/stores/alieExpress.png";
import kabumImg from "../../assets/stores/kabum.png";

export function Stores() {
  const stores = [
    {
      name: "Terabyte",
      image: terabyteImg,
      color: "bg-[#F25C05]", 
      href: "https://www.terabyteshop.com.br",
      // Opcional: Se um logo específico ainda parecer muito pequeno ou grande, 
      // você pode adicionar uma classe de ajuste manual aqui, ex: 'scale-110' ou 'scale-90'
      className: "", 
    },
    {
      name: "Pichau",
      image: pichauImg,
      color: "bg-[#cf0000]",
      href: "https://www.pichau.com.br",
      className: "",
    },
    {
      name: "AliExpress",
      image: aliexpressImg,
      color: "bg-[#191919]",
      href: "https://pt.aliexpress.com",
      className: "",
    },
    {
      name: "KaBuM!",
      image: kabumImg,
      color: "bg-[#0060B1]",
      href: "https://www.kabum.com.br",
      className: "",
    },
  ];

  return (
    <section className="w-full py-6">
      <h2 className="text-xl font-bold text-foreground mb-4">Lojas</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stores.map((store) => (
          <Link
            key={store.name}
            href={store.href}
            target="_blank"
            className={`
              ${store.color} 
              group relative h-32 w-full rounded-xl 
              flex items-center justify-center overflow-hidden
              transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
            `}
          >
            {/* CORREÇÃO AQUI:
               Definimos uma "caixa" fixa para os logos.
               h-20 (80px) garante que logos altos não estouram.
               w-[80%] garante margem lateral.
               max-w-[200px] impede que logos largos fiquem gigantes em telas grandes.
            */}
            <div className={`relative h-20 w-[80%] max-w-[200px] flex items-center justify-center ${store.className}`}>
              <Image
                src={store.image}
                alt={`Logo ${store.name}`}
                fill
                // object-contain é essencial aqui para não distorcer o logo
                className="object-contain filter drop-shadow-sm"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Stores;