import { NextResponse } from "next/server";

const TG_TOKEN = process.env.TG_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;
const TG_API = `${process.env.TG_API_URL}${TG_TOKEN}/sendMessage`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;
    const message = `*Name*: ${name}\n*Email*: \`${email}\`\n*Phone*: ${phone}
            `;

    await fetch(TG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    return new NextResponse("Message sent", { status: 200 });
  } catch (error: any) {
    console.log("Pinus");
    return new NextResponse("Message not sent", { status: 500 });
  }
}
