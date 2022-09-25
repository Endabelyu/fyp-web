import Contact from "./ContactModel.js";
import Users from "./UserModel.js";
import Project from "./ProjectModel.js";
import Image from "./ImageModel.js";


// relation user with project
Project.belongsTo(Users);

Users.hasMany(Project,{
    foreignKey: "userId"
});

//relation contact with user
Contact.belongsTo(Users);

Users.hasMany(Contact,{
    foreignKey:"userId"
});

//relation project with image
Image.belongsTo(Project);

Project.hasMany(Image,{
    foreignKey: "projectId"
});

export {Users, Image, Project, Contact};

