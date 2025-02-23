import Startup from '../models/Startup.js';

// @desc    Create a new startup
// @route   POST /api/startups
export const createStartup = async (req, res) => {
  const { name, description, industry, fundingNeeds, pitchDeck } = req.body;
  try {
    const startup = await Startup.create({
      name,
      description,
      industry,
      fundingNeeds,
      pitchDeck,
      userId: req.user._id,
    });
    res.status(201).json(startup);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all startups
// @route   GET /api/startups
export const getStartups = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.json(startups);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get a specific startup
// @route   GET /api/startups/:id
export const getStartupById = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);
    if (!startup) {
      return res.status(404).json({ message: 'Startup not found' });
    }
    res.json(startup);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};