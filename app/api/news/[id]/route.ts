import News from "@/model/News";
import { connect } from "@/services/connectDb";
import { unlink, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params: {id}} : {params: {id: string}})  {  
    try {
        await connect();
        const news = await News.findById(id);
        return NextResponse.json({
          data: news,
        }, {status: 200});
      } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Something went wrong" }, {status: 500});
      }
}

export async function PATCH(req: NextRequest, {params: {id}} : {params: {id: string}})  {  
  try {
      await connect();
      const news = await News.findById(id);
      if(!news) return NextResponse.json({
        message: "News not found"
      }, {status: 404});

      const body = await req.formData();
        if (
            // !body.get('title') ||
            // !body.get("createdBy") ||
            // !body.get("content") ||
            !body.get("key")
            // !body.get("image") ||
            // !body.get("shortDescription")
          ) {
            return NextResponse
              .json({ message: "Please provide all the required fields" }, { status: 404 });
          }
          if (process.env.key !== body.get("key")) {
            return NextResponse
            .json({ message: "Invalid Key" }, { status: 401 });
          }

          if (body.get("title")) {
            console.log("title updated")
            news.title = body.get("title");
          }
          if (body.get("createdBy")) {
            console.log("createdBy updated")
            news.createdBy = body.get("createdBy");
          }
          if (body.get("content")) {
            console.log("content updated")
            news.content = body.get("content");
          }
          if (!(body.get("image") == 'undefined')) {  
            const file : File | null = body.get("image") as unknown as File;
            if(!file) {
              return NextResponse
              .json({ message: "Please provide all the required fields" }, { status: 404 });
            }
            try {
              await unlink(`./public/${news.image}`);
            }
            catch (e:any) {
            }
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = Date.now() + file.name;
            const path = `./public/Images/${fileName}`
            await writeFile(path, buffer);
            news.image = `/Images/${fileName}`;
          }
          if (body.get("shortDescription")) {
            console.log("short")
            news.shortDescription = body.get("shortDescription");
          }
          await news.save();
      return NextResponse.json({
        message: "done",
      }, {status: 200});
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Something went wrong" }, {status: 500});
    }
}

export async function DELETE(req: NextRequest, {params: {id}} : {params: {id: string}}) {
  try {  
       await connect();
      const news = await News.findById(id);
      if(!news) return NextResponse.json({
        message: "News not found"
      }, {status: 404});

      const key = req.nextUrl.searchParams.get("key");

      if(key != process.env.key) return NextResponse
      .json({ message: "Invalid Key" }, { status: 404 });

      try {
        await unlink(`./public/${news.image}`);
      }
      catch (e:any) {
      }

      await News.deleteOne({_id: id});
      return NextResponse.json({ message: "deleted the news" }, {status: 202});  
  }
  catch (err) {
    return NextResponse.json({ message: "Something went wrong" }, {status: 500});
  }
}