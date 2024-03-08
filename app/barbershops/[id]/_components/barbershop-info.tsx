"use client"

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  }

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button onClick={handleBackClick} size="icon" variant="outline" className="z-10 top-4 left-4 absolute">
          <ChevronLeftIcon />
        </Button>

        <Button size="icon" variant="outline" className="z-10 top-4 right-4 absolute">
          <MenuIcon />
        </Button>

        <Image
          src={barbershop.imageUrl}
          alt={`Imagem da barbearia ${barbershop.name}`}
          fill
          style={{ objectFit: "cover" }}
          className="opacity-75"
        />
      </div>

      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>

        <div className="flex item-center gap-1 mt-2">
          <MapPinIcon size={18} className="text-primary" />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex item-center gap-1 mt-2">
          <StarIcon size={18} className="text-primary" />
          <p className="text-sm">5.0 (597 avaliações)</p>
        </div>
      </div>
    </div>
  );
}

export default BarbershopInfo;