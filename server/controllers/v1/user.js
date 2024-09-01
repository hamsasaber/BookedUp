const { users } = require("../../models"); //import an object gowa folder models
const bcrypt = require("bcrypt"); //importing bcrypt kolaha

const getAllUsers = async (req, res) => {
  const allUsers = await users.findAll();
  res.json(allUsers);
};

const userByID = async (req, res) => {
  const user = await users.findByPk(req.params.id);
  res.json(user);
};

const logIn = async (req, res) => {
  const exists = await users.findOne({
    where: { email: req.body.email },
  });
  if (exists) {
    bcrypt
      .compare(req.body.password, exists.password)
      .then((valid) => {
        if (valid) return res.json("Welcome back!");
        else
          return res
            .status(401)
            .json("User unauthorized, wrong email or password");
      })
      .catch((err) => {
        return res.status(500).json("Something went wrong " + err.message);
      });
  } else {
    return res.status(404).json("User doesnt Exist");
  }
};

const createUser = async (req, res) => {
  const duplicateUsers = await users.findAll({
    //gets all users that have an email like the one i entered 3ade w puts it in an array
    where: {
      email: req.body.email,
    },
  });
  if (duplicateUsers.length > 0) {
    //checks if there is any elements fy array duplicate 3shan otherwise it would always be true since duplicate array exists
    return res.json("Email already in use"); //must use return to stop the function at this res
  }
  const encryption = await bcrypt.hash(req.body.password, 10); //takes two parameters el string ely i want to hash in this case the password ely ana medkhalah w it takes the rounds aka nb of hashes ely hathsal 10 is standard mmken azawed/a2alel based on(security is indirectly proportional to performance)
  const newUser = await users.create({
    name: req.body.name,
    email: req.body.email,
    password: encryption,
    role: req.body.role || 1,
  });
  res.json(newUser);
};

const editProfile = async (req, res) => {
  const editeduser = await users.update(
    {
      name: req.body.name || "new User",
      email: req.body.email || "newUser@gmail.com",
      role: req.body.role,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.json(editeduser);
};

const deleteUser = async (req, res) => {
  const removeduser = await users.destroy({
    where: { id: req.params.id },
  });
  res.json(removeduser);
};

module.exports = {
  getAllUsers,
  userByID,
  createUser,
  logIn,
  editProfile,
  deleteUser,
};
