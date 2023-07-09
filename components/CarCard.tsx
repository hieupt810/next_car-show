"use client";

import { Car } from "@/models/Car";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { FC, useState } from "react";
import CarDetails from "./CarDetails";
import TitleButton from "./TitleButton";

interface CarCardProps {
  car: Car;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const carRent = calculateCarRent(car.city_mpg, car.cylinders);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-xl font-bold capitalize">
          {car.make} {car.model}
        </h2>
      </div>

      <p className="flex mt-6 text-3xl font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        {carRent}
        <span className="self-end text-sm font-medium">/ day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/car/img0.webp"
          alt="Car Model"
          title="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering Wheel"
              priority
            />
            <p className="text-sm">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="Tire" priority />
            <p className="text-sm">{car.drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="Gas" priority />
            <p className="text-sm">{car.city_mpg} MPG</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <TitleButton
            title="View More"
            className="w-full py-4 rounded-full bg-primary-blue text-white text-sm font-bold"
            rightIcon="/right-arrow.svg"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} close={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
