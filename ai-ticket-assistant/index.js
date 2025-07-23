import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import ticketRoutes from './routes/ticket.js';
import {serve} from 'inngest/express';
import { inngest } from './inngest/client.js';
import {onSignup} from './inngest/functions/on-signup.js';
import { onTicketCreate } from './inngest/functions/on-ticket-create.js';
dotenv.config(); // 🔥 Must be before any env access

const app = express();
app.use(cors({
  origin:process.env.APP_URL || "http://localhost:5173",
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const PORT = process.env.PORT || 3000;

console.log("🔍 MONGO_URI:", process.env.MONGO_URI);


app.use("/auth",userRoutes)
app.use("/ticket",ticketRoutes)

app.use("/api/inngest",serve({
  client: inngest,
  functions: [onSignup, onTicketCreate],
}))
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
