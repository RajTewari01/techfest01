"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Calendar, Mail, Info, HeartHandshake, ShoppingCart, Triangle } from "lucide-react";

export default function SidebarLeft() {
  const links = [
    { name: "HOME", icon: Home, path: "/" },
    { name: "EVENTS", icon: Calendar, path: "/events" },
    { name: "CONTACT", icon: Mail, path: "/contact" },
    { name: "ABOUT US", icon: Info, path: "/about" },
    { name: "SPONSORS", icon: HeartHandshake, path: "/sponsors" },
    { name: "STORE", icon: ShoppingCart, path: "/store" },
  ];

  return (
    <aside className="left-sidebar">
      <Link href="/" style={{ marginBottom: "2rem", marginTop: "1rem" }}>
        <Triangle size={48} fill="white" stroke="black" strokeWidth={2} style={{ filter: "drop-shadow(4px 4px 0px black)" }} />
      </Link>
      
      {links.map((link, i) => (
        <motion.div 
          key={link.name}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.1, x: 5 }}
        >
          <Link href={link.path} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", color: "white" }}>
            <link.icon size={28} />
            <span style={{ fontSize: "0.75rem", fontWeight: "bold", textAlign: "center" }}>{link.name}</span>
          </Link>
        </motion.div>
      ))}
    </aside>
  );
}
