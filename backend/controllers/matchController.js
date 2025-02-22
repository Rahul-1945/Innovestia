import { insertMany, find } from '../models/Match.js';
import { find as _find } from '../models/Startup.js';
import { find as __find } from '../models/Investor.js';

// @desc    Generate matches
// @route   POST /api/matches
export async function generateMatches(req, res) {
  try {
    const startups = await _find();
    const investors = await __find();

    const matches = [];
    startups.forEach((startup) => {
      investors.forEach((investor) => {
        if (startup.industry === investor.industryPreferences[0]) {
          const matchScore = Math.floor(Math.random() * 100); // Example scoring logic
          matches.push({
            startupId: startup._id,
            investorId: investor._id,
            matchScore,
          });
        }
      });
    });

    await insertMany(matches);
    res.status(201).json(matches);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}

// @desc    Get all matches
// @route   GET /api/matches
export async function getMatches(req, res) {
  try {
    const matches = await find();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}