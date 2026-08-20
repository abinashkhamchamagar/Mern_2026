import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: 6,
        maxLength: 50
    },
    email:{
        type: String,
        required: [true, "enter your email"],
        minLength: 8,
        maxLength: 100,
        unique: [true, "email already exists."],
        lowercase: true,
        validate: {
            validator: (value) => {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                return emailRegex.test(value);
            },
            message: "Invalid email address"
        },
    },
    password: {
        type: String,
        required: [true, "you must enter your password."],
    },
    roles: {
         type: [String],
          default: ["CUSTOMER"],
          enum: ["CUSTOMER", "MERCHANT", "ADMIN", "SUPER_ADMIN"]
    },
    phone:{
        type: String,
        minLength: 6,
        maxLength: 15,
        required: [true, "enter your phone number"],
        unique: [true, "Given phone number is already exists"]
    },
    address: {
        city: {
            type: String,
            required: true,
        },
        province: {
            type: String,
        },
        street: String,
        country: {
            type: String,
            default: "Nepal"
        },
    },
});

export default mongoose.model("User", userSchema);