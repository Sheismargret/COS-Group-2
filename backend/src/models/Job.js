import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
    },
    requirements: [{ type: String }],
    responsibilities: [{ type: String }],

    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    companyName: { type: String, required: true },
    companyLogo: { type: String, default: "" },

    location: {
      type: String,
      required: [true, "Job location is required"],
    },
    isRemote: { type: Boolean, default: false },

    jobType: {
      type: String,
      enum: ["full-time", "part-time", "contract", "internship", "freelance"],
      required: true,
    },

    experienceLevel: {
      type: String,
      enum: ["entry", "mid", "senior", "executive"],
      default: "mid",
    },

    salary: {
      min: { type: Number },
      max: { type: Number },
      currency: { type: String, default: "USD" },
      period: { type: String, enum: ["hourly", "monthly", "yearly"], default: "yearly" },
    },

    category: {
      type: String,
      required: [true, "Job category is required"],
      enum: [
        "technology", "marketing", "finance", "healthcare", "education",
        "design", "sales", "engineering", "legal", "hr", "other",
      ],
    },

    skills: [{ type: String }],

    applicationDeadline: { type: Date },

    status: {
      type: String,
      enum: ["open", "closed", "draft"],
      default: "open",
    },

    applicationsCount: { type: Number, default: 0 },

    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Index for search
jobSchema.index({ title: "text", description: "text", skills: "text" });
jobSchema.index({ category: 1, status: 1 });
jobSchema.index({ employer: 1 });

export default mongoose.model("Job", jobSchema);
