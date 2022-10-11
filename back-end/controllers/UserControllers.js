import db from '../config/Database.js';
import { Users, Contact } from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUsersPag = async (req, res) => {
  try {
    const limit = parseInt(req.params.limit);
    const page = parseInt(req.params.page);
    const offset = (page - 1) * limit;
    const users = await Users.findAndCountAll({
      limit: limit,
      offset: offset,
    });

    if (users) return res.status(200).json({ users });

    return res.status(404).json({ msg: 'user kosong' });
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  try {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword)
      return res.status(400).json({ msg: 'wrong conf password' });

    const salt = await bcrypt.genSalt();
    const hasPassword = await bcrypt.hash(password, salt);
    const user = await Users.create({
      name: name,
      email: email,
      password: hasPassword,
    });

    const contact = await Contact.create({
      instagram: null,
      github: null,
      linkedin: null,
      twitter: null,
      userId: user.dataValues.id,
    });
    res.json({ msg: 'register success' });
    console.log(user.dataValues.id);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });

    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: 'wrong password' });

    const name = user[0].name;
    const email = user[0].email;
    const userId = user[0].id;
    const createdAt = user[0].createdAt;
    const image = user[0].image;

    const accessToken = jwt.sign(
      { userId, name, email, createdAt, image },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '600s',
      }
    );

    const refreshToken = jwt.sign(
      { userId, name, email, createdAt, image },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: '1d',
      }
    );

    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: 'email tidak ditemukan' });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );

  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};

export const UpdateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, bio, location } = req.body;
  try {
    await Users.update(
      {
        name: name,
        email: email,
        bio: bio,
        location: location,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    res.status(201).json({ msg: 'create project successfuly' });
  } catch (error) {
    res.status(404).json({ msg: 'datamu tidak berhasil diubah' });
  }
};

export const UpdatePhoto = async (req, res) => {
  if (req.files === null)
    return res.status(404).json({ msg: 'no file uploaded' });

  const userId = req.params.id;
  const image = req.files.image;
  const sizeImage = image.data.length;
  const ext = path.extname(image.name);
  const imageName = image.md5 + ext;
  const urlImage = `${req.protocol}://${req.get('host')}/images/${imageName}`;

  const allowedType = ['.png', '.jpg', 'jpeg'];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: 'invaled image' });
  if (sizeImage > 5000000)
    return res.status(422).json({ msg: 'image must be less than 5 Mb' });

  image.mv(`./public/images/${imageName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Users.update(
        {
          image: urlImage,
        },
        {
          where: {
            id: userId,
          },
        }
      );

      res.status(201).json({ msg: 'update photo success' });
    } catch (error) {
      res.status(404).json({ msg: 'datamu tidak berhasil diubah' });
    }
  });
};
