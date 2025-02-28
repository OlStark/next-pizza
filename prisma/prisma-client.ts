import { PrismaClient } from "@prisma/client";

const prismaClientSingletion = new PrismaClient();

declare global {
  var prismaGlobal: ReturnType<typeof prismaClientSingletion> | undefined;
}
export const prisma = globalThis.prismaGlobal || prismaClientSingletion();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
