// import clientPromise from "@/lib/mongodb"

// export async function POST(request) {

//     const body=await request.json()

//     const client=await clientPromise
//     const db=client.db("linktree")
//     const collection=db.collection("url")

//     const doc=await collection.findOne({shorturl:body.shorturl})
//     if(doc){
//         return Response.json({success:false, error:true, message:"URL already exist please try another one!"})
//     }

//     const result=await collection.insertOne({
//        url:body.url,
//        shorturl:body.shorturl
//     })

//   return Response.json({ success:true, error:false, message:"URL Generated succesesfully" })
// }

import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("Bittree");
    const collection = db.collection("links");


    const doc = await collection.findOne({ handle: body.handle });

if (doc) {
  return Response.json({
    success: false,
    error: true,
    result: null,
    message: "Bittree already exists!",
  });
}

    const result = await collection.insertOne(body);

    console.log(body);

    return Response.json({
      success: "true",
      error: "false",
      message: "Your BitTree has been Generated!",
      result: result,
    });
  } catch (error) {
    console.log(error);
  }
}
