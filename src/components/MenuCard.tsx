import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  gradient: string;
}

export default function MenuCard({ icon: Icon, title, description, onClick, gradient }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-2 rounded-2xl shadow p-6 hover:shadow-lg transition-all text-white w-full"
      style={{ background: gradient }}
    >
      <Icon size={32} strokeWidth={1.5} />
      <span className="text-sm font-bold">{title}</span>
      <span className="text-xs opacity-80">{description}</span>
    </motion.button>
  );
}
