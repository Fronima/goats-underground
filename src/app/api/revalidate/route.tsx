'use server';
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
    try {
        const { isValidSignature, body } = await parseBody<{_type: string}>(
            req,
            process.env.SANITY_REVALIDATE_SECRET as string,
            );
            
        if (!isValidSignature) {
            const message = "Invalid Signature";
            return new Response(JSON.stringify({ message , isValidSignature, body }), { status: 401 });
        }

        if (!body?._type) {
            const message = "Bad Request";
            return new Response(JSON.stringify({ message, body }), { status: 400 });
        }

        revalidateTag(body._type);

        return NextResponse.json({body})
    }catch(error:any){
        return new Response(error.message, { status: 500 });
    }
}