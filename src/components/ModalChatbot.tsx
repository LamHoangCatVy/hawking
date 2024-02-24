'use client'

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Chat from "./Chat";

export default function ModalChatbot() {
  const router = useRouter()

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Study Assistant</h3>
          <div className="mt-2 px-7 py-3">
                <Chat />
          </div>
          <div className="flex justify-center mt-4">

            {/* Using useRouter to dismiss modal*/}
            <Button
              onClick={router.back}
            >
              Close
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}
