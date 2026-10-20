export type MenuItem = {
  id: string;
  name: string;
  category: "Coffee" | "Non-Coffee" | "Dessert";
  description: string;
  price: number;
  image: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "cloud-latte",
    name: "Cloud Latte",
    category: "Coffee",
    description:
      "Smooth espresso blended with creamy milk and a soft cloud of sweetness.",
    price: 28000,
    image: "/images/menu/cloud-latte.jpeg",
    badge: "♡ Best Seller",
  },
  {
    id: "sweet-potato-brulee",
    name: "Sweet Potato Brûlée",
    category: "Dessert",
    description:
      "Cool baked sweet potato brûlée served with creamy vanilla ice cream.",
    price: 35000,
    image: "/images/menu/sweet-potato-brulee.png",
    badge: "♡ Must Try",
  },
  {
    id: "strawberry-cloud-cake",
    name: "Strawberry Cloud Cake",
    category: "Dessert",
    description:
      "A fluffy strawberry cake layered with soft cream and sweet strawberry goodness.",
    price: 32000,
    image: "/images/menu/strawberry-cake.jpg",
  },
  {
    id: "purin-caramel-dream",
    name: "Purin's Caramel Dream",
    category: "Non-Coffee",
    description:
      "A creamy caramel milk treat topped with ice cream and fluffy marshmallows.",
    price: 30000,
    image: "/images/menu/caramel-pudding.jpg",
    badge: "♡ Sweet Favorite",
  },
  {
    id: "hello-kitty-cherry-float",
    name: "Hello Kitty Cherry Float",
    category: "Non-Coffee",
    description:
      "A fizzy cherry soda topped with fluffy Hello Kitty-shaped foam and a juicy cherry.",
    price: 32000,
    image: "/images/menu/cherry-float.jpg",
    badge: "♡ Limited Edition",
  },
  {
    id: "hello-kitty-fruity-cloud",
    name: "Hello Kitty Fruity Cloud",
    category: "Dessert",
    description:
      "A colorful mix of fresh peach, banana, strawberry, kiwi, and mango topped with fluffy whipped cream, crispy wafer sticks, and an adorable Hello Kitty-shaped treat.",
    price: 35000,
    image: "/images/menu/fruit-salad.jpg",
  },
  {
    id: "hello-kitty-fruit-sando",
    name: "Hello Kitty Fruit Sando",
    category: "Dessert",
    description:
      "A soft and fluffy Japanese fruit sandwich shaped like Hello Kitty, filled with fresh strawberries, kiwi, and sweet mango for a colorful and creamy treat.",
    price: 38000,
    image: "/images/menu/fruit-sando.jpg",
  },
  {
    id: "hello-kitty-pancake-cloud",
    name: "Hello Kitty Pancake Cloud",
    category: "Dessert",
    description:
      "Fluffy pancakes topped with whipped cream, a colorful white chocolate Hello Kitty decoration, and fresh slices of apple, cherry, and peach for a sweet and fruity delight.",
    price: 42000,
    image: "/images/menu/hk-pancake.png",
  },
  {
    id: "cinnamoroll-blueberry-roll",
    name: "Cinnamoroll Blueberry Roll",
    category: "Dessert",
    description:
      "A soft and fluffy blue roll cake filled with smooth, creamy frosting, inspired by the adorable Cinnamoroll and his dreamy sky-blue world.",
    price: 36000,
    image: "/images/menu/morol-rollcake.jpg",
  },
  {
    id: "my-melody-strawberry-roll",
    name: "My Melody Strawberry Roll",
    category: "Dessert",
    description:
      "A soft and fluffy strawberry roll cake with creamy filling, inspired by the sweet and lovely My Melody in her signature pink style.",
    price: 38000,
    image: "/images/menu/strawberry-rollcake.jpg",
  },
];