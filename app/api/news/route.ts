import News from "@/model/News";
import { connect } from "@/services/connectDb";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req: Request) {
    try {
        const body = await req.formData();
        
        if (
            !body.get('title') ||
            !body.get("createdBy") ||
            !body.get("content") ||
            !body.get("key") ||
            !body.get("image") ||
            !body.get("shortDescription")
          ) {
            return NextResponse
              .json({ message: "Please provide all the required fields" }, { status: 404 });
          }
          if (process.env.key !== body.get("key")) {
            return NextResponse
            .json({ message: "Invalid Key" }, { status: 404 });
          }

          const file : File | null = body.get("image") as unknown as File;
          if(!file) {
            return NextResponse
            .json({ message: "Please provide all the required fields" }, { status: 404 });
          }
          
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const fileName = Date.now() + file.name;
          const path = `./public/Images/${fileName}`
          await writeFile(path, buffer);
          await connect();
          const newsData = {
            title: body.get("title"),
            createdBy: body.get("createdBy"),
            image: `/Images/` + fileName,
            content: body.get("content"),
            shortDescription: body.get("shortDescription"),
          };
          const news = new News(newsData);
          await news.save();
          NextResponse.json({ message: "News created successfully" }, {status: 201});
    } catch (e) {
      console.log(e)
        return NextResponse.json(
            {
              error: "Internal Server Error",
              message: "An error occurred while processing the request",
            },
            { status: 500 }
          );
    }
}

export async function GET(req: NextRequest) { 
  try {
    const query = {
      page: +(req.nextUrl.searchParams.get("page") || 0),
      limit:  +(req.nextUrl.searchParams.get("limit") || 10)
    }
    
    await connect();
    const totalNews = await News.countDocuments();
    const page =  query.page * 1 || 1;
    const limit = query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    const news = await News.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    return NextResponse.json({
      totalPages: Math.ceil(totalNews / limit),
      totalNews: totalNews,
      data: news,
    }, {status: 200});
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "An error occurred while processing the request",
      },
      { status: 500 }
    );
  }
}