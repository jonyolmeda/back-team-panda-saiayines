const { hotelFound, notHotel } = require("../config/responses");

const verifyShow = (model) => [
    async (req, res, next) => {
        let show = await model.findOne({ _id: req.params.id });
        if (show) {
            if (show.userId.equals(req.user.id)) {
                return next();
            }
            return showHotel(req, res);
        }
        return hotelFound(req, res);
    },
];

module.exports = verifyShow;