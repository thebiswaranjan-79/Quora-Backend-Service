function pingUserController(req, res) {
    return res.json({
        message : 'Quora Controller is Up',
    });
}

module.exports = {
    pingUserController,
}