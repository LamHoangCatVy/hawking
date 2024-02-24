// /api/course/createChapters

import { NextResponse } from "next/server";
import { createChaptersSchema } from "@/validators/course";
import { ZodError } from "zod";
import { strict_output } from "@/lib/gpt";
import { getUnsplashImage } from "@/lib/unsplash";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";
// import { checkSubscription } from "@/lib/subscription";

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    // if (!session?.user) {
    //   return new NextResponse("unauthorised", { status: 401 });
    // }
    // const isPro = await checkSubscription();
    // if (session.user.credits <= 0 && !isPro) {
    //   return new NextResponse("no credits", { status: 402 });
    // }
    const body = await req.json();
    const { title, units } = createChaptersSchema.parse(body);

    type outputUnits = {
      title: string;
      chapters: {
        youtube_search_query: string;
        chapter_title: string;
      }[];
    }[];

    let output_units: outputUnits = await strict_output(
      "You are an AI capable of generating course content, coming up with relevant chapter titles, and finding relevant youtube videos for each chapter",
      new Array(units.length).fill(`It is your job to create a course about ${title}. The user has a request to create a chapter for each unit and the chapters related to the units the user requests and cannot rename the units limit 10 words. Then, for each chapter, provide a detailed youtube search query that can be used to find an informative educationalvideo for each chapter. Limit 10 word`),
      {
        title: "title of the unit",
        chapters: "an array of chapters, each chapter must have the key youtube_search_query and chapter_title in the JSON object and have only 3 chapters, each chapter is only about 10 words and optimize it for low token usage",
      }
    );

    const imageSearchTerm = await strict_output("you are an AI capable of finding the most relevant image for a course", `Please provide a good image search term for the title of a course about ${title}. This search term will be fed into the Unsplash API, so make sure it is a good search term that will return good results`, {
      image_search_term: "a good search term for the title of the course",
    });

    const course_image = await getUnsplashImage(imageSearchTerm.image_search_term);
    const course = await prisma.course.create({
      data: {
        name: title,
        image: course_image,
      },
    });

    for (const unit of output_units) {
      const title = unit.title;
      const prismaUnit = await prisma.unit.create({
        data: {
          name: title,
          courseId: course.id,
        },
      });
      await prisma.chapter.createMany({
        data: unit.chapters.map((chapter) => {
          return {
            name: chapter.chapter_title,
            youtubeSearchQuery: chapter.youtube_search_query,
            unitId: prismaUnit.id,
          };
        }),
      });
    }
    // await prisma.user.update({
    //   where: {
    //     id: session.user.id,
    //   },
    //   data: {
    //     credits: {
    //       decrement: 1,
    //     },
    //   },
    // });

    // return NextResponse.json({output_units, imageSearchTerm:imageSearchTerm, course_image});
    return NextResponse.json({course_id: course.id})
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse("invalid body", { status: 400 });
    } else {
      return new NextResponse(`${error}`, { status: 500 });
    }
  }
}
