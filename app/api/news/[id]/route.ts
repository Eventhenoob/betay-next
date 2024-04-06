import News from "@/model/News";
import { connect } from "@/services/connectDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params: {id}} : {params: {id: string}})  {  
    
    console.log(id)
    try {
        await connect();
        const news = await News.findById(id);
        NextResponse.json({
          data: news,
        }, {status: 200});
      } catch (err) {
        console.log(err);
        NextResponse.json({ message: "Something went wrong" }, {status: 500});
      }
}