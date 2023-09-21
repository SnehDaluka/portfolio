import { Schema, model, models } from "mongoose";

const messageSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is rrequired"],
    minlength: 10,
    maxLength: 10,
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
  },
});

const Message = models.Message || model("Message", messageSchema);

export default Message;
