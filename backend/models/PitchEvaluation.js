import { Schema, model } from 'mongoose';

const pitchEvaluationSchema = new Schema({
  startupId: { type: Schema.Types.ObjectId, ref: 'Startup', required: true },
  evaluationResult: { type: String, required: true },
});

export default model('PitchEvaluation', pitchEvaluationSchema);