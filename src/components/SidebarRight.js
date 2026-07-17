"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link2, Camera, Globe, MessageSquare, Share2, MessageCircle } from "lucide-react";

export default function SidebarRight() {
  const socials = [
    { icon: Camera, href: "#" }, // Instagram alternative
    { icon: Globe, href: "#" }, // LinkedIn alternative
    { icon: Share2, href: "#" }, // YouTube alternative
    { icon: MessageSquare, href: "#" }, // Twitter alternative
    { icon: Link2, href: "#" }, // Facebook alternative
    { icon: MessageCircle, href: "#" },
  ];

  return (
    <aside className="right-sidebar">
      {socials.map((social, i) => (
        <motion.div
          key={i}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          <Link href={social.href} style={{ color: "black", padding: "0.5rem" }}>
            <social.icon size={28} />
          </Link>
        </motion.div>
      ))}
    </aside>
  );
}
