"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Trophy, Users } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <main style={{ minHeight: "100vh", padding: "2rem" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4rem" }}>
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{ fontSize: "2rem", fontWeight: "900", display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <div style={{ backgroundColor: "var(--accent-pink)", width: "30px", height: "30px", border: "var(--border-width) solid var(--border-color)", borderRadius: "50%" }}></div>
          TECHFEST
        </motion.div>
        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Link href="/dashboard" className="brutal-btn">
            Enter Dashboard
          </Link>
        </motion.div>
      </nav>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center", textAlign: "center", marginTop: "4rem" }}
      >
        <motion.h1 
          variants={itemVariants}
          style={{ fontSize: "5rem", fontWeight: "900", lineHeight: "1", maxWidth: "800px", textTransform: "uppercase" }}
        >
          Build The <span style={{ color: "var(--accent-blue)", textShadow: "4px 4px 0px var(--border-color)" }}>Future</span> In 3D
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          style={{ fontSize: "1.5rem", maxWidth: "600px", fontWeight: "600" }}
        >
          Join the ultimate hackathon experience. Design, develop, and deploy state-of-the-art interactive web experiences.
        </motion.p>
        
        <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
          <Link href="/dashboard" className="brutal-btn brutal-btn-yellow" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.2rem", padding: "16px 32px" }}>
            Start Building <ArrowRight size={24} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "8rem", paddingBottom: "4rem" }}
      >
        <motion.div variants={itemVariants} className="brutal-card" style={{ padding: "2rem", backgroundColor: "var(--accent-green)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Code size={48} style={{ marginBottom: "1rem" }} />
          <h2 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "1rem" }}>Code</h2>
          <p style={{ fontWeight: "bold" }}>Write clean, scalable Next.js and React code.</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="brutal-card" style={{ padding: "2rem", backgroundColor: "var(--accent-pink)", color: "white", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Users size={48} style={{ marginBottom: "1rem" }} />
          <h2 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "1rem" }}>Collaborate</h2>
          <p style={{ fontWeight: "bold" }}>Work with top talent from around the world.</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="brutal-card" style={{ padding: "2rem", backgroundColor: "var(--accent-blue)", color: "white", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Trophy size={48} style={{ marginBottom: "1rem" }} />
          <h2 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "1rem" }}>Win</h2>
          <p style={{ fontWeight: "bold" }}>Take home massive prizes and glory.</p>
        </motion.div>
      </motion.div>
    </main>
  );
}
