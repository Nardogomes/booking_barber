"use client"
import { Barbershop } from "@prisma/client"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Card, CardContent } from "@/app/_components/ui/card"
import { Button } from "@/app/_components/ui/button"
import { Badge } from "@/app/_components/ui/badge"
import { StarIcon } from "lucide-react"

interface BarbershopItemProp {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProp) => {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  }

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="w-full h-[159px] relative">
          <div className="absolute top-2 left-2 z-10">
            <Badge variant={"secondary"} className="opacity-90 flex items-center justify-center gap-1">
              <StarIcon size={12} className="fill-primary text-primary" />
              <span>5.0</span>
            </Badge>
          </div>

          <Image
            src={barbershop.imageUrl}
            alt={`Image da barbearia ${barbershop.name}`}
            style={{ objectFit: "cover" }}
            fill
            className="rounded-2xl"
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>

          <Button className="w-full mt-3" variant="secondary" onClick={handleBookingClick}>Reservar</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem