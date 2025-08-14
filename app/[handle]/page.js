import Navbar from "@/component/Navbar"
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";


export default async function Page({ params }) {
  const { handle } = await params;

   const client = await clientPromise;
    const db = client.db("Bittree");
    const collection = db.collection("links");

    const item = await collection.findOne({ handle:handle});

    if(!item){
        return notFound()
    }

  const item2 = {
    "_id": {
      "$oid": "689c1a53ccd48b8ea3827e1f"
    },
    "handle": "Choudhary",
    "Links": [
      {
        "link": "Instagram",
        "linktext": "https://www.instagram.com/choudhary01420/"
      },
      {
        "link": "Github",
        "linktext": "https://github.com/Talibchoudhary01"
      },
      {
        "link": "Linkedin",
        "linktext": "https://www.linkedin.com/in/talib-choudhary/"
      }
    ],
    "pic": "https://media.licdn.com/dms/image/v2/D5635AQHl_1prCzmJ3g/profile-framedphoto-shrink_200_200/B56ZgtK56IHcAY-/0/1753104490464?e=1755666000&v=beta&t=V7AN5BJ1cE7nGQGM_h5tvvS_GYoNWSleSWRaBn3MtPE"
 
    ,
    "handle": "Choudhary",
    "Links": [
      {
        "link": "Instagram",
        "linktext": "https://www.instagram.com/choudhary01420/"
      },
      {
        "link": "Github",
        "linktext": "https://github.com/Talibchoudhary01"
      },
      {
        "link": "Linkedin",
        "linktext": "https://www.linkedin.com/in/talib-choudhary/"
      }
    ],
    "pic": "https://media.licdn.com/dms/image/v2/D5635AQHl_1prCzmJ3g/profile-framedphoto-shrink_200_200/B56ZgtK56IHcAY-/0/1753104490464?e=1755666000&v=beta&t=V7AN5BJ1cE7nGQGM_h5tvvS_GYoNWSleSWRaBn3MtPE"
 
    ,
    "handle": "Choudhary",
    "Links": [
      {
        "link": "Instagram",
        "linktext": "https://www.instagram.com/choudhary01420/"
      },
      {
        "link": "Github",
        "linktext": "https://github.com/Talibchoudhary01"
      },
      {
        "link": "Linkedin",
        "linktext": "https://www.linkedin.com/in/talib-choudhary/"
      }
    ],
    "pic": "https://media.licdn.com/dms/image/v2/D5635AQHl_1prCzmJ3g/profile-framedphoto-shrink_200_200/B56ZgtK56IHcAY-/0/1753104490464?e=1755666000&v=beta&t=V7AN5BJ1cE7nGQGM_h5tvvS_GYoNWSleSWRaBn3MtPE"
 
    
};

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex justify-center items-center p-4">
        
       {item && <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8 w-[90%] sm:w-[400px] flex flex-col items-center gap-6">
          
        
          <Image 
            className="h-24 w-24 rounded-full border-4 border-white/50 shadow-lg hover:cursor-pointer"
            src={item.pic}
            alt="Profile"
          />
          <span className="font-bold text-lg text-black drop-shadow-md">@{item.handle}</span>

          
          <div className="flex flex-col gap-4 w-full">
            {item.Links.map((linkItem, index) => (
              <a
                key={`${linkItem.link}-${index}`}
                href={linkItem.linktext}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/30 backdrop-blur-md border border-white/40 
                           rounded-xl text-center font-medium text-black hover:bg-white/50 
                           transition-all duration-300 shadow-lg"
              >
                {linkItem.link}
              </a>
            ))}
          </div>

          <p className="text-xs text-black/70">Made with ❤️ by Talib</p>
        </div>
}
      </div>
    </>
  );
}
