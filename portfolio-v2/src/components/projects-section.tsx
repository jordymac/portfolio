"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RotationSkeleton } from "./skeletons/rotation-skeleton";
import { PositioningSkeleton } from "./skeletons/positioning-skeleton";

interface Project {
  id: string;
  name: string;
  skeleton: React.ReactNode;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: "rotation",
    name: "Rotation",
    skeleton: <RotationSkeleton />,
    liveUrl: "https://rotation-sigma.vercel.app/",
  },
  {
    id: "positioning",
    name: "Positioning Visualizer",
    skeleton: <PositioningSkeleton />,
    liveUrl: "https://positioning-visualizer.vercel.app/",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with Dropdown */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-5xl font-bold text-foreground">
              What I&apos;m Building
            </h2>

            {/* Project Dropdown Badge */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <span className="font-medium">{selectedProject.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-10">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        setSelectedProject(project);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-secondary transition-colors ${
                        selectedProject.id === project.id
                          ? "bg-secondary font-medium"
                          : ""
                      }`}
                    >
                      {project.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Preview Skeleton - Clickable */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer"
          >
            {selectedProject.skeleton}
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-foreground px-6 py-3 rounded-lg font-medium shadow-lg">
                Open Live Preview
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Full-Screen Iframe Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            {/* Grayed out background overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal content */}
            <div className="relative h-full w-full p-6 flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-3 bg-card rounded-lg hover:bg-secondary transition-colors shadow-lg z-10"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>

              {/* Iframe Container */}
              <div className="w-full h-full max-w-7xl max-h-[90vh] bg-card rounded-2xl shadow-2xl overflow-hidden">
                <iframe
                  src={selectedProject.liveUrl}
                  className="w-full h-full"
                  title={selectedProject.name}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
