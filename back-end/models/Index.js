import Contact from './contactModel.js';
import Users from './cserModel.js';
import Project from './crojectModel.js';
import Image from './imageModel.js';

// relation user with project
Project.belongsTo(Users);

Users.hasMany(Project, {
  foreignKey: 'userId',
});

//relation contact with user
Contact.belongsTo(Users);

Users.hasMany(Contact, {
  foreignKey: 'userId',
});

//relation project with image
Image.belongsTo(Project);

Project.hasMany(Image, {
  foreignKey: 'projectId',
});

export { Users, Image, Project, Contact };
