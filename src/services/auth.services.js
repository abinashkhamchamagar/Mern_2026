import User from "../models/User.js"
import bcrypt from "bcryptjs";

const login = async (input) => {
    const user = await User.findOne({
        $or: [{ email: input?.email }, { phone: input?.phone }],
    });

    if (!user) {
        throw {
            message: "User not found. ",
        };


    };
    const isPasswordMatch = await bcrypt.compare(input.password, user.password);
    if (!isPasswordMatch) {
        throw {
            message: "Password incorrect."
        };
    }
    return {
        _id: user._id,
        name: user.name,
        address: user.address,
        phone: user.phone,
        email: user.email,
        roles: user.roles,
    }
};

const register = async (input) => {
    const hashPassword = await bcrypt.hash(input.password, 10);

    const user = await User.create({
        name: input.name,
        email: input.email,
        password: hashPassword,
        phone: input.phone,
        address: input.address,
    });

    return {
        _id: user._id,
        name: user.name,
        address: user.address,
        phone: user.phone,
        email: user.email,
        roles: user.roles,
    }
};

export default { login, register };