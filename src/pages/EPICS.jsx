import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-dark-blue-purple mb-6 text-center md:text-left"
      >
        {title}
      </motion.h2>
      <div>{children}</div>
    </div>
  </section>
);

const Card = ({ heading, children, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="p-6 rounded-xl shadow-lg bg-white border border-light-accent/30"
  >
    <h3 className="text-xl font-semibold text-dark-blue-purple mb-3">{heading}</h3>
    <div className="text-dark-blue-purple/90 leading-relaxed">{children}</div>
  </motion.div>
);

const EPICS = () => {
  return (
    <div className="w-full overflow-hidden min-h-screen bg-light-blue-purple">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-light-blue-purple to-white/40">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-blue-purple mb-4"
          >
            EPICS at Anurag University
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-dark-blue-purple/80 max-w-4xl mx-auto"
          >
            Engineering Projects in Community Service (EPICS) integrates service-learning with engineering education, enabling students to design, build, and deploy solutions for community partners and non-profits.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <Section title="About EPICS">
        <div className="grid grid-cols-1 gap-6">
          <Card heading="EPICS at Anurag University">
            <p>
              EPICS is a pioneering initiative where student teams apply technical skills to solve real-world challenges, fostering social responsibility and innovation. Anurag University has embraced the EPICS model to cultivate discovery and holistic growth, reinforced by a Memorandum of Understanding (MOU) with Purdue University, the birthplace of EPICS.
            </p>
          </Card>
        </div>
      </Section>

      {/* Key Contributions & Activities */}
      <Section title="Key Contributions & Activities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card heading="Community Engagement" index={0}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Adopted 10 villages for community-centric projects, with 3 programs completed.</li>
              <li>Submitted 19 projects to the IEEE-EPICS project call for potential funding.</li>
            </ul>
          </Card>
          <Card heading="Key Partnerships" index={1}>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Palle Srujana:</span> Supporting grassroots innovators by developing prototypes for their inventions.
              </li>
              <li>
                <span className="font-semibold">LEPRA Society:</span> Creating health-tech solutions, including digital measurement tools for therapeutic footwear for leprosy and elephantiasis patients.
              </li>
            </ul>
          </Card>
        </div>
      </Section>

        {/* Flagship Initiative */}
      <Section title="Flagship Initiative: AUISC x EPICS Eco-Insights Tour">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card heading="Overview" index={0}>
            <p>
              An immersive event where students identify and solve real-world challenges across multiple domains.
            </p>
          </Card>
          <Card heading="Agriculture" index={1}>
            <p>Developed solutions like a “Solar Powered Ultrasonic Monkey Repellent.”</p>
          </Card>
          <Card heading="Education & Healthcare" index={2}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Proposed a “Student Tracking System” for school buses.</li>
              <li>Ideated a “Biometric Panic Button” after observing rural healthcare gaps.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Featured Project */}
      <Section title="Featured Project: Underground Drainage and Manhole Monitoring System">
        <div className="grid grid-cols-1 gap-6">
          <Card heading="Real-time Safety through IoT">
            <p>
              In response to safety issues in Hyderabad, an EPICS team is developing an IoT-based system to monitor manholes. Using sensors for water level, gas, and flow, the system will provide real-time alerts to prevent overflows and accidents. This project is a collaborative effort with Purdue University.
            </p>
          </Card>
        </div>
      </Section>

      {/* Future Scope */}
      <Section title="Future Scope">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card heading="Near-term Milestones" index={0}>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete the “Underground Drainage and Manhole Monitoring Systems” project with prototype assembly and field trials.</li>
              <li>Develop a Proof of Concept (PoC) for health-tech with LEPRA: “Digital Measurement for Paduka (DIMPLE)” and sensor-based footstep tracking.</li>
            </ul>
          </Card>
          <Card heading="Growth & Funding" index={1}>
            <p>
              EPICS aims to expand by encouraging teams to submit proposals to the “EPICS in IEEE” call for projects to secure up to $10,000 USD in funding for new service-learning solutions.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default EPICS;



