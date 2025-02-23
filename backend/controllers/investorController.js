import Investor from '../models/Investor.js';
import mongoose from 'mongoose';

// @desc    Create/update investor profile
// @route   POST /api/investors
export const createInvestor = async (req, res) => {
  const { investmentCapacity, riskLevel, industryPreferences } = req.body;
  try {

    const userId = new mongoose.Types.ObjectId(req.user.id);

    const investor = await Investor.create({
      userId,
      investmentCapacity,
      riskLevel,
      industryPreferences,
    });
    res.status(201).json(investor);
  } catch (err) {
    console.log(err);
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