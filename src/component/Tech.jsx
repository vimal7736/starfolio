import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPrisma, SiClerk } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const techItems = [
  { Icon: FaHtml5, color: 'text-orange-600', label: 'HTML' },
  { Icon: FaCss3Alt, color: 'text-blue-600', label: 'CSS' },
  { Icon: FaReact, color: 'text-blue-500', label: 'React' },
  { Icon: FaJsSquare, color: 'text-yellow-500', label: 'JavaScript' },
  { Icon: SiTailwindcss, color: 'text-cyan-500', label: 'Tailwind CSS' },
  { Icon: FaNodeJs, color: 'text-green-500', label: 'Node.js' },
  { Icon: SiPrisma, color: 'text-gray', label: 'Prisma' },
  { Icon: SiExpress, color: 'text-gray-600', label: 'Express' },
  { Icon: SiClerk, color: 'text-gray-500', label: 'Clerk' },
  { Icon: SiMongodb, color: 'text-green-600', label: 'MongoDB' },
];

export default function Tech() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div
        ref={ref}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {techItems.map(({ Icon, color, label }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.4, y: -30 }}
          >
            <Icon className={`text-6xl ${color}`} />
            <p>{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
