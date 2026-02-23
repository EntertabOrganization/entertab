import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import ProjectCard from "./ProjectCard";

const projects = [
  { name: "Tretrip" },
  { name: "Aramway Group" },
  { name: "Intellect Way" },
  { name: "Serenity Home Care" },
  { name: "AramVox" },
  { name: "AramHub" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Projects" className="mb-2" />

        <p className="text-center text-text-dark text-lg md:text-xl font-medium mt-2 mb-6">
          Your success starts with what we create together
        </p>

        {/* Button */}
        <div className="flex justify-center mb-8">
          <Button variant="outline" href="#projects">
            Explore all our work
          </Button>
        </div>

        {/* Projects Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Row 1 */}
          <ProjectCard
            name={projects[0].name}
            className="h-[280px] md:h-[300px]"
          />
          <ProjectCard
            name={projects[1].name}
            className="h-[280px] md:h-[340px] sm:-mt-0 lg:-mt-0"
          />
          <ProjectCard
            name={projects[2].name}
            className="h-[280px] md:h-[300px]"
          />

          {/* Row 2 */}
          <ProjectCard
            name={projects[3].name}
            className="h-[280px] md:h-[300px]"
          />
          <ProjectCard
            name={projects[4].name}
            className="h-[280px] md:h-[340px] sm:-mt-0 lg:-mt-5"
          />
          <ProjectCard
            name={projects[5].name}
            className="h-[280px] md:h-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
