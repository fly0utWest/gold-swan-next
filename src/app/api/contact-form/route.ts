import { NextResponse } from "next/server";

const TG_TOKEN = process.env.TG_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;
const TG_API = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      services,
      customService,
      industry,
      previousExperience,
      howDidYouHear,
      businessOperationDuration,
      additionalComment,
    } = body;
    const servicesString = services.join("\n");

    const message = `*New Contact Form Submission*

*Personal Information*
*Name*: ${name}
*Email*: \`${email}\`
*Phone*: ${phone}

*Ordered Services*
${servicesString}
${customService ? `*Custom Service*: ${customService}\n` : ""}
*Industry*: ${industry}

*Previous Experience*: ${previousExperience}

*How Did You Hear About Us*: ${howDidYouHear}

*Business Operation Duration*: ${businessOperationDuration}

${additionalComment ? `*Additional Comments*: ${additionalComment}` : ""}
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
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
