// app/components/ProductCard.tsx
import Image from "next/image";

type ProductCardProps = {
  title: string;
  image: string;
};

export default function ProductCard({ title, image }: ProductCardProps) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}
