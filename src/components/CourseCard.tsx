import React from "react";
import Link from "next/link";
import Image from "next/image";
type Props = {};

const CourseCard = (props: Props) => {
  return (
    <>
      <div className="border rounded-lg border-secondary">
        <div className="relative">
          <Link href={`https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1024px-Google_Images_2015_logo.svg.png`} className="relative block w-fit">
            <Image src="" className="object-cover w-full max-h-[300px] rounded-t-lg" width={300} height={300} alt="picture of the course" />
            <span className="absolute px-2 py-1 text-white rounded-md bg-black/60 w-fit bottom-2 left-2 right-2">Course Name</span>
          </Link>
        </div>

        <div className="p-4">
          <h4 className="text-sm text-secondary-foreground/60">Units</h4>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
