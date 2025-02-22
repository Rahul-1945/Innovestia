import { Schema, model } from 'mongoose';

const investorSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  investmentCapacity: { type: Number, required: true },
  riskLevel: { type: String, required: true },
  industryPreferences: { type: [String], required: true },
});

export default model('Investor', investorSchema);