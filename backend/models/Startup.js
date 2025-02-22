import { Schema, model } from 'mongoose';

const startupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  industry: { type: String, required: true },
  fundingNeeds: { type: Number, required: true },
  pitchDeck: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default model('Startup', startupSchema);