import { Users, Contact } from '../models/index.js';

export const getContact = async (req, res) => {
  try {
    const response = await Contact.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = async (req, res) => {
  try {
    const id = req.params.id;
    const { instagram, linkedin, twitter, github } = req.body;
    const response = await Contact.update(
      {
        instagram: instagram,
        linkedin: linkedin,
        github: github,
        twitter: twitter,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(201).send({
      message: 'update user data success',
      result: response,
    });
  } catch (error) {
    console.log(error);
  }
};
