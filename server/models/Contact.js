import mongoose from "mongoose";
const contactSchema=new mongoose.Schema({
    email: {type: String,
    required:true,
    unique:true
    },
    fullname: {type: String,
    required:true,
    unique:true
    },
    firstVisit: {type: String
        },
    findValue: {type: String
        },
    primaryReason: {type: String
        },
    info: {type: String
        },
    howEasy: {type: String
        },
    howLikely: {type: String
        },
    comments: {type: String
        }
});
const contactmodel=mongoose.model("contactform",contactSchema, "feedback");
export default contactmodel;
