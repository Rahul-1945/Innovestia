import PitchEvaluation from '../models/PitchEvaluation.js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import mongoose from 'mongoose';

const genAI = new GoogleGenerativeAI('AIzaSyAOXWmektkV5iGspR36GwJqwFlAMnOLiEI');

// @desc    Evaluate pitch
// @route   POST /api/pitch-evaluation
export const evaluatePitch = async (req, res) => {
  const { pitchDeck } = req.body;
  if (!pitchDeck) {
    return res.status(400).json({ message: "PitchDeck idea is required" });
  }
  try {
    // Get the generative model

    const startupId = new mongoose.Types.ObjectId(req.user.id);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Define the prompt
    const prompt = `Generate a detailed business plan for a startup with the following details: ${pitchDeck}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;

    const evaluationResult = response.text();
    const pitchEvaluation = await PitchEvaluation.create({
      startupId,
      evaluationResult,
    });

    res.status(201).json(pitchEvaluation);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
};