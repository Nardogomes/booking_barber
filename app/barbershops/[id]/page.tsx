import { db } from "@/app/_lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";

interface BarbershopDetailsPageProps {
  params: {
    id?: string
  }
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    // TUDO redirecionar para a home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      services: true
    }
  })

  if (!barbershop) {
    // TUDO redirecionar para a home page
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-5 py-6 flex flex-col gap-4">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} isAuthenticated={!!session?.user} />
        ))}
      </div>
    </div>
  );
}

export default BarbershopDetailsPage;