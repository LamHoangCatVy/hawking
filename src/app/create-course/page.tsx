import React from "react";
import { InfoIcon } from "lucide-react";
import CreateCourseForm from "@/components/CreateCourseForm";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {};

const CreateCourse = async (props: Props) => {
  const session = await getAuthSession()
  if(!session?.user){
    return redirect("/library")
  }

  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">Start with your interest</h1>
      <div className="flex p-4 mt-5 border-none bg-secondary">
        <InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
        <div>Please provide a course title and a list of specific topics you want to learn about, and Hawking will create a course for you based on that.</div>
      </div>
      <CreateCourseForm />
    </div>
  );
};

export default CreateCourse;
