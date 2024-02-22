import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1>Hi mate, welcome to Hawking Edu, where we provide quality educational content with minimum price</h1>
      <div className="flex flex-row">
        <div className="m-4">
          <Link href="create-course">
            <Button>Get Started</Button>
          </Link>
        </div>
        <div className="m-4">
          <Link href="library">
            <Button>Course Library</Button>
          </Link>
        </div>
      </div>

    </div>
  );
}
