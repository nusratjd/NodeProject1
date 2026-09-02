const createUser = (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    res.send(`User created: ${name}, ${email}`);
};


const updateUser = (req, res) => {

    res.send('User updated');
};


const deleteUser = (req, res) => {

    res.send('User deleted');
};


const getUserById = (req, res) => {

    const userId = req.params.id;

    res.send(`User ID: ${userId}`);
};


module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById
};