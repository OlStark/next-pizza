import { categories, _ingredients } from "./constans";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
    const ingridientData = _ingredients.map((ingridient) => ({
        name: ingridient.name,
        price: ingridient.price,
        image: ingridient.imageUrl,
        id: ingridient.id,
      }));
      

    await prisma.user.createMany({
        data: [
            {
                fullName: "John Doe",
                email: "examle@example.com",
                password: hashSync("password", 10),
                verified: new Date(),
                role: "USER"
            },
            {
                fullName: "Admin",
                email: "gY5bI@example.com",
                password: hashSync("password", 10),
                verified: new Date(),
                role: "ADMIN"
            }
        ]
    })

    await prisma.category.createMany({
        data: categories
    })

    await prisma.ingridient.createMany({
        data: ingridientData
    })
}

async function down() {
     await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
}

async function main() {
    try {
        await down();
        await up();
    } catch (error) {
        console.error(error);
    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});