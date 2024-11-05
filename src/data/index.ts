import { IProductCard } from "types";

export const homeBanners = [
  "banner.webp",
  "banner.webp",
  "banner.webp",
  "banner.webp",
  "banner.webp",
];

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  return products;
}

function transformFakeStoreProduct(product: any): IProductCard {

  const rating = Array(5).fill(0).map((_, i) => 
    i < Math.floor(product.rating.rate) ? 1 : 
    i === Math.floor(product.rating.rate) && product.rating.rate % 1 > 0 ? 0.5 : 0
  );

  return {
    images: [product.image],
    name: product.title,
    price: Math.round(product.price * 10),
    rating,
    ratingAmount: product.rating.count,
    ...(product.category.includes('clothing') && { 
      colors: ["red", "black", "blue"].slice(0, 2) 
    }),
    ...(Math.random() > 0.7 && { discount: Math.floor(Math.random() * 30) + 10 }),
    ...(product.category === "electronics" && Math.random() > 0.8 && { isNew: true })
  };
}

let cachedProducts: IProductCard[];

async function getTransformedProducts(): Promise<IProductCard[]> {
  if (!cachedProducts) {
    const products = await fetchProducts();
    cachedProducts = products.map(transformFakeStoreProduct);
  }
  return cachedProducts;
}

function getRandomProducts(products: IProductCard[], count: number): IProductCard[] {
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export async function getHomeSalesSwiper(): Promise<IProductCard[]> {
  const products = await getTransformedProducts();
  return getRandomProducts(products.filter(p => p.discount), 8);
}

export async function getHomeBestSellingSwiper(): Promise<IProductCard[]> {
  const products = await getTransformedProducts();
  return [...products]
    .sort((a, b) => b.ratingAmount - a.ratingAmount)
    .slice(0, 7);
}

export async function getHomeProductsSwiper(): Promise<IProductCard[]> {
  const products = await getTransformedProducts();
  return getRandomProducts(products, 13);
}

export async function getRelatedProducts(): Promise<IProductCard[]> {
  const products = await getTransformedProducts();
  return getRandomProducts(products, 5);
}

export let homeSalesSwiper: IProductCard[] = [];
export let homeBestSellingSwiper: IProductCard[] = [];
export let homeProductsSwiper: IProductCard[] = [];
export let relatedProducts: IProductCard[] = [];

(async () => {
  homeSalesSwiper = await getHomeSalesSwiper();
  homeBestSellingSwiper = await getHomeBestSellingSwiper();
  homeProductsSwiper = await getHomeProductsSwiper();
  relatedProducts = await getRelatedProducts();
})();