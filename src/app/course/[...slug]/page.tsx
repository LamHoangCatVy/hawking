import CourseSideBar from "@/components/CourseSideBar";
import MainVideoSummary from "@/components/MainVideoSummary";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuizCards from "@/components/QuizCards";
import Link from "next/link";

const CoursePage = () => {
  return (
    <div>
      <CourseSideBar />
      <div>
        <div className="ml-[400px] px-8">
          <div className="flex">
            <MainVideoSummary />
          </div>

          <div className="flex-[1] h-[1px] mt-4 text-gray-500 bg-gray-500" />
          <div className="flex pb-8">
            <Link href="" className="flex mt-4 mr-auto w-fit">
              <div className="flex items-center">
                <ChevronLeft className="w-6 h-6 mr-1" />
                <div className="flex flex-col items-start">
                  <span className="text-sm text-secondary-foreground/60">Previous</span>
                  <span className="text-xl font-bold">Previous</span>
                </div>
              </div>
            </Link>

            <Link href="" className="flex mt-4 ml-auto w-fit">
              <div className="flex items-center">
                <div className="flex flex-col items-start">
                  <span className="text-sm text-secondary-foreground/60">Next</span>
                  <span className="text-xl font-bold">Next</span>
                </div>
                <ChevronRight className="w-6 h-6 ml-1" />
              </div>
            </Link>
          </div>
          <QuizCards />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
