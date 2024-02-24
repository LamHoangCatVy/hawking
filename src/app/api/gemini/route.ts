import { NextRequest, NextResponse } from "next/server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {

  // get prompt field from the request body
  const reqBody = await req.json();
  const { userPrompt } = reqBody;
  const genAI = new GoogleGenerativeAI("AIzaSyDgGfaQyhZoc7KNGuuOCSt6Lls0xwPf_yM");
  const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig: { maxOutputTokens: 200 }});

  try {
    const result = await model.generateContent("In 50 words, " + userPrompt);
    const response = result.response;
    const text = response.text();
    console.log(text)
    return NextResponse.json({
      text
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      text: "Unable to process the prompt. Please try again."
    }, reqBody);
  }
}
