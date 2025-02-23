import mongoose from 'mongoose';

const pitchEvaluationSchema = new mongoose.Schema({
  startupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Startup', required: true },
  evaluationResult: { type: String, required: true },
});

export default mongoose.model('PitchEvaluation', pitchEvaluationSchema);