import BusinessPlan from '../models/BusinessPlan.js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import mongoose from 'mongoose';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI('AIzaSyAOXWmektkV5iGspR36GwJqwFlAMnOLiEI');

/**
 * Generate a business plan using Gemini API
 * @route POST /api/business-plans
 */
export const generateBusinessPlan = async (req, res) => {
  const { startupDetails } = req.body;

  // Validate input
  if (!startupDetails) {
    return res.status(400).json({ message: "Startup idea is required" });
  }

  console.log("Gemini API Key:", process.env.GEMINI_API_KEY ? "Exists" : "Missing");

  try {

    const startupId = new mongoose.Types.ObjectId(req.user.id);
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Define the prompt
    const prompt = `Generate a detailed business plan for a startup with the following details: ${startupDetails}`;

    // Generate content using Gemini API
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const planContent = response.text();

    // Save the business plan to the database
    const businessPlan = await BusinessPlan.create({
      startupId,
      planContent,
    });

    // Return the generated business plan
    res.status(201).json(businessPlan);
  } catch (err) {
    console.error('Error in generateBusinessPlan (Gemini API):', err);
    res.status(500).json({ message: 'Server Error' });
  }
};