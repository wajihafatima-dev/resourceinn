import mongoose from "mongoose";

const DashboardCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Card = mongoose.models.Card || mongoose.model("Card", DashboardCardSchema);
export default Card;