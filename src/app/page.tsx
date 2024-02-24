import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModalChatbot from "@/components/ModalChatbot";
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;
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
      <div className="m-4">
        <Link href="/?show=true">
          <Button>Try our Beta AI Assistant</Button>
        </Link>
      </div>
      </div>
      {show && <ModalChatbot />}
    </div>
  );
}
