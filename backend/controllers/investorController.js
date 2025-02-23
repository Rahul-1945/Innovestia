import Investor from '../models/Investor.js';

// @desc    Create/update investor profile
// @route   POST /api/investors
export const createInvestor = async (req, res) => {
  const { investmentCapacity, riskLevel, industryPreferences } = req.body;
  try {
    const investor = await Investor.create({
      userId: req.user._id,
      investmentCapacity,
      riskLevel,
      industryPreferences,
    });
    res.status(201).json(investor);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all investors
// @route   GET /api/investors
export const getInvestors = async (req, res) => {
  try {
    const investors = await Investor.find();
    res.json(investors);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};