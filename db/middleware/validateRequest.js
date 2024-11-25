import { userSchema } from "../schemas/userSchema.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const validateUser = (req, res, next) => {
  const { error } = userSchema.POST.validate(req.body);
  if (error) return next(new ErrorResponse(error, 400));
  next();
};

export const validateRequest = (req, res, next) => {
  const {
    params: { model },
    method,
  } = req;
  let schema;

  switch (model) {
    case "users":
      schema = userSchema[method];
      break;
    default:
      return next(new ErrorResponse("Invalid model specified", 404));
  }

  const { error } = schema?.validate(req.body);
  if (error) return next(new ErrorResponse(error, 400));
  next();
};