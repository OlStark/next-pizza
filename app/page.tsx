import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";
import { Categories } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        {/* Фильтры */}
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Товары */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: "1",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "2",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "3",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "4",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "5",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "6",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "7",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: "1",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "2",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "3",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "4",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "5",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "6",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: "7",
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ef9050501f3fa690a64053f5f07626.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
