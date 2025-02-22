import { create, find } from '../models/Investor.js';

// @desc    Create/update investor profile
// @route   POST /api/investors
export async function createInvestor(req, res) {
  const { investmentCapacity, riskLevel, industryPreferences } = req.body;
  try {
    const investor = await create({
      userId: req.user._id,
      investmentCapacity,
      riskLevel,
      industryPreferences,
    });
    res.status(201).json(investor);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}

// @desc    Get all investors
// @route   GET /api/investors
export async function getInvestors(req, res) {
  try {
    const investors = await find();
    res.json(investors);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}