import { Schema, model } from 'mongoose';

const matchSchema = new Schema({
  startupId: { type: Schema.Types.ObjectId, ref: 'Startup', required: true },
  investorId: { type: Schema.Types.ObjectId, ref: 'Investor', required: true },
  matchScore: { type: Number, required: true },
});

export default model('Match', matchSchema);