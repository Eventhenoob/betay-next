import {z} from "zod";

const emailValidator = z.string().email();

export default emailValidator;