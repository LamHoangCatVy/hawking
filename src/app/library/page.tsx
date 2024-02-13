import CourseCard from "@/components/CourseCard";
import { prisma } from "@/lib/db";
import React from "react";

type Props = {};

const Library = async (props: Props) => {
  return (
    <div className="py-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        <CourseCard />;
      </div>
    </div>
  );
};

export default Library;
