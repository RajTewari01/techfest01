"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TopNav() {
  return (
    <nav className="top-nav">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ fontSize: "1.5rem", fontWeight: "900", display: "flex", gap: "2rem", alignItems: "center" }}
      >
        <Link href="/accommodation" className="hover-underline">ACCOMMODATION</Link>
        <Link href="/workshops" className="hover-underline">WORKSHOPS</Link>
        <Link href="/competitions" className="hover-underline">COMPETITIONS</Link>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Link href="/auth/signin" className="brutal-btn brutal-btn-pink" style={{ padding: "8px 16px" }}>
          SIGN IN
        </Link>
      </motion.div>
    </nav>
  );
}
