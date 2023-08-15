import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request) {
  revalidateTag("websiteData");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
