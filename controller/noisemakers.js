const Makers = require("../model/Makers");

// Get all noise makers
const getNoiseMakers = async (req, res) => {
  try {
    const noiseMakers = await Makers.find({});
    res.status(200).json({ noisemakers: noiseMakers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNoiseMaker = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send("Bad request.");
    }
    const noiseMaker = await Makers.findById(id);
    if (!noiseMaker) {
      return res.status(404).send("Noise maker not found.");
    }
    res.status(200).send({ noiseMaker });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Create a new noise maker
const createNoiseMaker = async (req, res) => {
  const { name, times } = req.body;
  const image = req.file.path;
  try {
    const noiseMaker = await Makers.create({ name, times, image });
    res.status(201).json({ noiseMaker });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a noise maker by ID
const updateNoiseMaker = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedNoiseMaker = await Makers.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure the update is validated against the schema
    });
    if (!updatedNoiseMaker) {
      return res.status(404).json({ message: "Noise maker not found" });
    }
    res.status(200).json({ noiseMaker: updatedNoiseMaker });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a noise maker by ID
const deleteNoiseMaker = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNoiseMaker = await Makers.findByIdAndDelete(id);
    if (!deletedNoiseMaker) {
      return res.status(404).json({ message: "Noise maker not found" });
    }
    res.status(200).json({ message: "Noise maker deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getNoiseMakers,
  createNoiseMaker,
  updateNoiseMaker,
  deleteNoiseMaker,
  getNoiseMaker,
};
