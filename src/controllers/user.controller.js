import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadoncloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);

  if (
    [fullName, email, username, password].some((field) => {
      field?.trim() === "";
    })
  ) {
    throw new ApiError(400, "Parameter cant be empty");
  }
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(400, "The parameter aldready exists");
  }

  const avatarlocalpath = req.files?.avatar[0]?.path;
  const coverImagelocalpath = req.files?.coverImage[0]?.path;

  if (!avatarlocalpath) {
    throw new ApiError(400, "Avatar compulsory");
  }

  const avatar = await uploadoncloudinary(avatarlocalpath);
  const coverimage = await uploadoncloudinary(coverImagelocalpath);

  if (!avatar) {
    throw new ApiError(400, "Avatar compulsory");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverimage.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const usercreated = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!usercreated) {
    throw new ApiError(500, "Error while registering user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, usercreated, "User Registered Successfully"));
});

export default registerUser;
