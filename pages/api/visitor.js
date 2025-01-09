import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const visitor = await prisma.visitor.upsert({
    where: { id: 1 },
    update: { count: { increment: 1 } },
    create: { count: 1 },
  });
  res.status(200).json({ count: visitor.count });
}
