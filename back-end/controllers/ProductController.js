import db from "../config/Database.js";
import {Users, Project, Image, Contact} from "../models/Index.js";
import path from "path";

export const getProject = async(req, res) => {
    try {
        const response = await Project.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const findProject = async(req, res) => {
    try {
        const response = await Project.findOne({
            where:{
                id:req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const createProject = async(req, res) =>{
    if(req.files === null) return res.status(404).json({msg: "no file uploaded"});
    const {name, url} = req.body;
    const userId = req.params.id;
    const file = req.files.file;
    const sizeFile = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const urlImage = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg','jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "invaled image"});
    if(sizeFile > 5000000) return res.status(422).json({msg: "image must be less than 5 Mb"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            if(name === null) return res.status(400).json({msg: "please make name value"});
    
            await Project.create({
                name:name,
                image:urlImage,
                url:url,
                userId:userId
            });
    
            res.status(201).json({msg: "create project successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    });
}

export const uploadImage = async(req, res) => {
    if(req.files === null) return res.status(404).json({msg: "no file uploaded"});
    const projectId = req.params.id;
    const file = req.files.file;
    const sizeFile = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const urlImage = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg','jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "invaled image"});
    if(sizeFile > 5000000) return res.status(422).json({msg: "image must be less than 5 Mb"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});

        try {
            await Image.create({
                name: fileName,
                path: urlImage,
                projectId: projectId
            });

            res.status(201).json({msg: "Project created success..."})
        } catch (error) {
            console.log(error.message);
        }
    })
}