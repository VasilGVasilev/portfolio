'use client'

import { motion } from "framer-motion"

export default function Page() {
  return (
    <motion.div
    className="h-40 w-40 rounded-full bg-gray-800 top-1/2 left-1/2 absolute"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
  )
}
