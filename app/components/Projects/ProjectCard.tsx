import Image from "next/image";
import type { ReactNode } from "react";

import ArrowIcon from "../ui/ArrowIcon";

interface ProjectCardProps {
  name: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  topLeftIcon?: ReactNode;
  bottomRightIcon?: ReactNode;
}

export default function ProjectCard({
  name,
  imageSrc,
  imageAlt,
  className = "",
  topLeftIcon = "",
  bottomRightIcon = <ArrowIcon size={22} color="#fff" />,
}: ProjectCardProps) {
  return (
    <div
      className={`relative group w-full aspect-square overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            fill
            className="object-cover opacity-100 transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-[#8F8F91] opacity-10 z-10" />
        </>
      ) : (
        <div className="w-full h-full img-placeholder transition-transform duration-500 group-hover:scale-105">
          {name}
        </div>
      )}

      {/* Top-left SVG */}
      <div className="absolute top-10 left-7 z-30">
        {topLeftIcon}
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      {/* Arrow Button */}
      <div className="absolute bottom-4 right-4 w-15 h-15 p-5 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:bg-primary-light transition-colors duration-300 z-30">
        {bottomRightIcon}
      </div>
    </div>
  );
}
