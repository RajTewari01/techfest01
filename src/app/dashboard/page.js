"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Clock, ArrowLeft, X } from "lucide-react";

const tasks = [
  { id: 1, title: "Task 1: Setup Profile", status: "completed", reward: 50 },
  { id: 2, title: "Task 2: Build in 3D", status: "active", reward: 100, description: "Design and develop a 3D interactive website for Techfest. Think 3D scroll animations, interactive objects and dynamic transitions." },
  { id: 3, title: "Task 3: Final Submission", status: "locked", reward: 200 },
];

export default function Dashboard() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [submissionUrl, setSubmissionUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSelectedTask(null);
      setSubmissionUrl("");
      alert("Task submitted successfully!");
    }, 1500);
  };

  return (
    <main style={{ minHeight: "100vh", padding: "2rem", backgroundColor: "var(--accent-blue)" }}>
      <nav style={{ marginBottom: "2rem" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>
          <ArrowLeft /> Back to Home
        </Link>
      </nav>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="brutal-card" 
        style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", backgroundColor: "var(--bg-primary)" }}
      >
        <motion.h1 variants={itemVariants} style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "2rem", textTransform: "uppercase" }}>
          Your Quests
        </motion.h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {tasks.map((task) => (
            <motion.div 
              key={task.id} 
              variants={itemVariants}
              whileHover={task.status === "active" ? { scale: 1.02 } : {}}
              className="brutal-card"
              style={{ 
                padding: "1.5rem", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                backgroundColor: task.status === "completed" ? "var(--accent-green)" : (task.status === "locked" ? "#ccc" : "white"),
                opacity: task.status === "locked" ? 0.7 : 1,
                cursor: task.status === "active" ? "pointer" : "default"
              }}
              onClick={() => task.status === "active" && setSelectedTask(task)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {task.status === "completed" ? <CheckCircle size={32} /> : <Clock size={32} />}
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{task.title}</h2>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.2rem", backgroundColor: "var(--bg-secondary)", padding: "4px 12px", border: "2px solid black", borderRadius: "20px" }}>
                  +{task.reward} XP
                </span>
                {task.status === "active" && (
                  <button className="brutal-btn brutal-btn-pink">Start</button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal using AnimatePresence for mount/unmount animations */}
      <AnimatePresence>
        {selectedTask && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0, 
              backgroundColor: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center",
              padding: "1rem", zIndex: 50
            }}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
              className="brutal-card"
              style={{ width: "100%", maxWidth: "600px", padding: "2rem", backgroundColor: "white", position: "relative" }}
            >
              <button 
                onClick={() => setSelectedTask(null)}
                style={{ position: "absolute", top: "1rem", right: "1rem", background: "none", border: "none" }}
              >
                <X size={32} />
              </button>
              
              <h2 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "1rem" }}>{selectedTask.title}</h2>
              <div style={{ display: "inline-block", backgroundColor: "var(--bg-secondary)", padding: "8px 16px", border: "3px solid black", fontWeight: "bold", marginBottom: "2rem", transform: "rotate(-2deg)" }}>
                Reward: {selectedTask.reward} Coins
              </div>
              
              <p style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "2rem" }}>
                {selectedTask.description}
              </p>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>Submission URL *</label>
                  <input 
                    type="url" 
                    required 
                    value={submissionUrl}
                    onChange={(e) => setSubmissionUrl(e.target.value)}
                    placeholder="https://drive.google.com/..."
                    style={{ 
                      width: "100%", padding: "1rem", fontSize: "1.2rem", 
                      border: "var(--border-width) solid var(--border-color)", 
                      borderRadius: "8px",
                      outline: "none"
                    }}
                  />
                </div>
                
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                  <button type="button" onClick={() => setSelectedTask(null)} className="brutal-btn" style={{ backgroundColor: "#e0e0e0", color: "black" }}>
                    Cancel
                  </button>
                  <button type="submit" className="brutal-btn brutal-btn-yellow" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Task"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
