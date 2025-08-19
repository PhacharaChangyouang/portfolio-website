import React from 'react';
import { motion } from 'framer-motion'; // motion
import projectsData from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // กำหนดสถานะเริ่มต้น: โปร่งใสและอยู่ต่ำกว่าตำแหน่งปกติ 50px
        whileInView={{ opacity: 1, y: 0 }} // เมื่อมองเห็นในหน้าจอ: เปลี่ยนเป็นทึบแสงและเลื่อนขึ้นมาที่ตำแหน่งปกติ
        viewport={{ once: true }} // ทำให้แอนิเมชันทำงานเพียงครั้งเดียวเมื่อถูกมองเห็น
      >
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;