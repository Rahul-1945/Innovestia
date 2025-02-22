import mongoose from 'mongoose';

const businessPlanSchema = new mongoose.Schema({
  startupId: { type: Schema.Types.ObjectId, ref: 'Startup', required: true },
  planContent: { type: String, required: true },
});

export default model('BusinessPlan', businessPlanSchema);