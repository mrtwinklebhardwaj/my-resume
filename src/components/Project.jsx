import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="py-8 px-4 bg-[#010319]/60 sm:backdrop-blur-md backdrop-blur-none p-6 rounded-lg shadow border border-white/10 mb-16" id="projects">
            <div className="max-w-5xl mx-auto">
                <motion.h3 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold mb-6 text-[#E3ECFF]"
                >
                    Projects
                </motion.h3>
                
                <motion.div 
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div 
                        className="bg-[#0F1629] p-5 rounded-lg border border-white/10"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.h4 
                            className="text-white text-lg font-semibold mb-1"
                            whileHover={{ color: "#B8A7ED" }}
                            transition={{ duration: 0.2 }}
                        >
                            Enterprise DevOps Platform
                        </motion.h4>
                        <motion.p 
                            className="text-[#D1D5DB] text-sm"
                            whileHover={{ color: "#E3ECFF" }}
                            transition={{ duration: 0.2 }}
                        >
                            CI/CD platform designed for managing microservices, infrastructure, security, and observability. Led UI architecture, improved performance by 70%, and developed reusable component.
                        </motion.p>
                    </motion.div>
                    
                    <motion.div 
                        className="bg-[#0F1629] p-5 rounded-lg border border-white/10"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.h4 
                            className="text-white text-lg font-semibold mb-1"
                            whileHover={{ color: "#B8A7ED" }}
                            transition={{ duration: 0.2 }}
                        >
                            Centralized Workflow System
                        </motion.h4>
                        <motion.p 
                            className="text-[#D1D5DB] text-sm"
                            whileHover={{ color: "#E3ECFF" }}
                            transition={{ duration: 0.2 }}
                        >
                            Admin portal for service requests and approvals. Built configurable field flows, reusable forms, and status-based workflows tailored for enterprise teams.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="bg-[#0F1629] p-5 rounded-lg border border-white/10"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.h4 
                            className="text-white text-lg font-semibold mb-1"
                            whileHover={{ color: "#B8A7ED" }}
                            transition={{ duration: 0.2 }}
                        >
                            Employee Management System
                        </motion.h4>
                        <motion.p 
                            className="text-[#D1D5DB] text-sm"
                            whileHover={{ color: "#E3ECFF" }}
                            transition={{ duration: 0.2 }}
                        >
                            Internal platform for managing employee and customer workflows. Led frontend development and established the base frontend framework.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="bg-[#0F1629] p-5 rounded-lg border border-white/10"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.h4 
                            className="text-white text-lg font-semibold mb-1"
                            whileHover={{ color: "#B8A7ED" }}
                            transition={{ duration: 0.2 }}
                        >
                            Maturity Insights Dashboard
                        </motion.h4>
                        <motion.p 
                            className="text-[#D1D5DB] text-sm"
                            whileHover={{ color: "#E3ECFF" }}
                            transition={{ duration: 0.2 }}
                        >
                            DevOps insights platform featuring DORA metrics dashboard, Developer Insights, Deploy Analytics, and third-party tool integrations (SonarQube, Trivy, etc). Led the development of visual dashboards, React upgrades, and roadmap execution support.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="bg-[#0F1629] p-5 rounded-lg border border-white/10"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.h4 
                            className="text-white text-lg font-semibold mb-1"
                            whileHover={{ color: "#B8A7ED" }}
                            transition={{ duration: 0.2 }}
                        >
                            Monitoring & Analytics Interface
                        </motion.h4>
                        <motion.p 
                            className="text-[#D1D5DB] text-sm"
                            whileHover={{ color: "#E3ECFF" }}
                            transition={{ duration: 0.2 }}
                        >
                            Monitoring suite for CI/CD platform components including In-Queue Dashboard, Pipeline Analytics, Component Health Check & Restart, Outlier Services, and Integration Analytics. Led frontend R&D, UX, and real-time visualizations for enhanced operational insight.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Project;
