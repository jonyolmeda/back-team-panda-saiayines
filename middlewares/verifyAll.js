const verifyAll = (schema, resFound, resNot) => [
    async (req, res, next) => {
        let data = await schema.findOne({ userId: req.params.id });
        if (data) {
            if (data.userId.equals(req.user.id)) {
                return next();
            }
            return resFound(req, res);
        }
        return resNot(req, res);
    },
];

module.exports = verifyAll;