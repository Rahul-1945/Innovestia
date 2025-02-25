import BusinessPlan from '../models/BusinessPlan.js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import mongoose from 'mongoose';
import { marked } from 'marked'; // You'll need to install this package

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyAOXWmektkV5iGspR36GwJqwFlAMnOLiEI');

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

  try {
    const startupId = new mongoose.Types.ObjectId(req.user.id);
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Define an enhanced prompt that encourages properly formatted output
    const prompt = `
      Generate a detailed, well-structured business plan for the following startup:
      
      ${startupDetails}
      
      Format the business plan with clear section headings using markdown syntax (e.g., ## Executive Summary).
      
      Include the following sections:
      1. Executive Summary
      2. Company Description
      3. Market Analysis
      4. Organization & Management
      5. Service or Product Line
      6. Marketing & Sales Strategy
      7. Financial Projections
      8. Funding Requirements (if applicable)
      
      Use proper formatting with bullet points, numbered lists, and paragraph breaks to make the content easy to read.
      Make the writing style professional, concise, and impactful.
    `;

    // Generate content using Gemini API
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let planContent = response.text();
    
    // Convert markdown to HTML for better rendering
    const htmlContent = marked(planContent);
    
    // Save both the raw and formatted content
    const businessPlan = await BusinessPlan.create({
      startupId,
      planContent,
      formattedContent: htmlContent
    });

    // Return the generated business plan with both formats
    res.status(201).json({
      ...businessPlan.toObject(),
      formattedContent: htmlContent
    });
  } catch (err) {
    console.error('Error in generateBusinessPlan (Gemini API):', err);
    res.status(500).json({ message: 'Server Error' });
  }
};