"use client";
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
type Props = {};

const Chat = (props: Props) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [output, setOutput] = useState("The response will appear here...");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPrompt("")
  };

  const onSubmit = async (e: any) => {
    handleSubmit(e)
    if (prompt === "") {
      console.log("Prompt cannot be empty!");
      return;
    }
    // clear the output
    setOutput("The response will appear here...");

    // create a post request to the /api/chat endpoint
    const response = await fetch("api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userPrompt: prompt,
      }),
    });

    // get the response from the server
    const data = await response.json();
    // set the response in the state
    setResponse(data.text);
    console.log(data)
    console.log(output)
  };
  return (
    <div className="text-gray-500 text-sm">
      <div>
        <h2 className="text-sm">{response ? response : "Here is the knowledge Palace"}</h2>
      </div>
      <form onSubmit={onSubmit} className="max-w-4xl pt-12">
        <div className="join w-full flex">
          <Input className="text-gray-500" type="text" placeholder="Ask me, curious mind" value={prompt} required onChange={(e) => setPrompt(e.target.value)}  />
          <Button className="ml-2" type="submit">
            Explain
          </Button>

        </div>
      </form>
    </div>
  );
};

export default Chat;
