import { create } from '../models/BusinessPlan.js';
import { post } from 'axios';

// @desc    Generate business plan
// @route   POST /api/business-plans
export async function generateBusinessPlan(req, res) {
  const { startupDetails } = req.body;
  try {
    const response = await post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: `Generate a business plan for: ${startupDetails}`,
      max_tokens: 500,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    const planContent = response.data.choices[0].text;
    const businessPlan = await create({
      startupId: req.user._id,
      planContent,
    });

    res.status(201).json(businessPlan);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}