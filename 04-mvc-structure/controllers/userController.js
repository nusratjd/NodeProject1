const getUsers = (req, res) => {
    res.json([
        { id: 1, name: "dipa" },
        { id: 2, name: "mim" }
    ]);
};

const getUserById = (req, res) => {
    const id = req.params.id;

    res.json({
        id: id,
        name: "User " + id
    });
};

module.exports = {
    getUsers,
    getUserById
};