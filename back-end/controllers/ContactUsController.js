import ContactUs from "../models/ContactUsModel.js";

export const submitMessage = async(req, res) => {
    try {
        const {name, email, message} = req.body;
        const submit = await ContactUs.create({
            name:name,
            email:email,
            message:message
        });
        res.status(200).json({'msg' : "send message success"});
    } catch (error) {
        console.log(error);
    }
}