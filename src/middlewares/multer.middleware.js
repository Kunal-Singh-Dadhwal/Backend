import e from "express";
import multer from "multer";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../../public/temp')
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + '_' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '_' + uniquesuffix)
  }
})

export const upload = multer({
  storage: storage
})