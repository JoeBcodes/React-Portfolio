import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity" 
import { sanityClient } from "../../sanity";

//sanityClient import from .env.local?

const query = groq`
    *[_type == "social"]
    `


type Data = {
  socials: Social[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    //create async?
    const socials: Social[] = await sanityClient.fetch(query);
  res.status(200).json({ socials })
}
