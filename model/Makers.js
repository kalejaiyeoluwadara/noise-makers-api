const mongoose = require("mongoose");
const MakersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Provide noise maker"s name '],
  },
  times: {
    type: Number,
    default: 1,
  },
});
module.exports = mongoose.model("NoiseMakers", MakersSchema);
