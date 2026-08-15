import { motion } from "motion/react";

type Props = { eyebrow: string; title: string; description?: string };

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-40 md:pt-52">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        className="mt-6 text-[clamp(3rem,10vw,8rem)]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
      <div className="hairline mt-14" />
    </section>
  );
}
