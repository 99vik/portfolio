"use client";

import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <CircleChevronLeft
      size={28}
      strokeWidth={2.5}
      className="absolute -left-8 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-emerald-500 hover:text-emerald-600 md:block"
      onClick={onClick}
    />
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <CircleChevronRight
      size={28}
      strokeWidth={2.5}
      className="absolute -right-8 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-emerald-500 hover:text-emerald-600 md:block"
      onClick={onClick}
    />
  );
}

export default function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    customPaging: (i: number) => (
      <div
        className={`size-4 rounded-full bg-emerald-500 transition ${currentIndex === i ? "opacity-100" : "opacity-40"}`}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      {images.map((image, i) => (
        <div key={i} className="relative aspect-[16/9]">
          <Image
            src={image}
            className="object-scale-down"
            fill
            alt="project image"
          />
        </div>
      ))}
    </Slider>
  );
}
