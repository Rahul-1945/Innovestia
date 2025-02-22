import { create } from '../models/PitchEvaluation.js';
import { post } from 'axios';

// @desc    Evaluate pitch
// @route   POST /api/pitch-evaluation
export async function evaluatePitch(req, res) {
  const { pitchDeck } = req.body;
  try {
    const response = await post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: `Evaluate this pitch deck: ${pitchDeck}`,
      max_tokens: 150,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    const evaluationResult = response.data.choices[0].text;
    const pitchEvaluation = await create({
      startupId: req.user._id,
      evaluationResult,
    });

    res.status(201).json(pitchEvaluation);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}