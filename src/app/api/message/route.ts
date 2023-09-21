import { connectToDB } from "@database/db";
import { MessageType } from "@interface/message_type";
import Message from "@models/message";
import { HydratedDocument } from "mongoose";

export const POST = async (req: Request) => {
  try {
    const { name, email, phone, message } = await req.json();
    // const message: MessageType = await req.json();
    // console.log(message);

    await connectToDB();

    const createMessage: HydratedDocument<MessageType> = new Message({
      email: email,
      name: name,
      phone: phone,
      message: message,
    });

    const data = await createMessage.save();

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify(error), { status: 500 });
  }
};
