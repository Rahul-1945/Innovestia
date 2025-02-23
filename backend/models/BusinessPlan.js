import mongoose from 'mongoose';

const businessPlanSchema = new mongoose.Schema({
  startupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Startup', required: true },
  planContent: { type: String, required: true },
});

export default mongoose.model('BusinessPlan', businessPlanSchema);