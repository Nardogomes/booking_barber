"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";
import SideMenu from "@/app/_components/side-menu";
import Image from "next/image";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.replace("/");
  }

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button onClick={handleBackClick} size="icon" variant="outline" className="z-10 top-4 left-4 absolute">
          <ChevronLeftIcon />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="z-10 absolute top-4 right-4">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>

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