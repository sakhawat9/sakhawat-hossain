import { motion } from "framer-motion"
import { useState } from "react"
import { fadeInpUp, routeAnimation, stagger } from "../animations"
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { projects as projectsData } from "../data"
import { Category } from "../type"

const project = () => {

    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState("all");
    const [showDetails, setShowDetails] = useState<number | null>(null)

    const handlerFilterCategory = (category: Category | 'all') => {
        if(category === 'all') {
            setProjects(projectsData);
            setActive(category)
            return;
        }

        const newArray = projectsData.filter(project =>project.category.includes(category))
        setProjects(newArray);
        setActive(category);
    }

    return (
        <motion.div 
            className="px-5 py-2 overflow-y-scroll" 
            style={{height: '65vh'}}
            variants={routeAnimation} 
            initial="initial" 
            animate="animate"
            exit="exit"
        >
            <ProjectsNavbar 
                handlerFilterCategory={handlerFilterCategory} 
                active={active} 
            />

            <motion.div 
                variants={stagger}
                initial="initial"
                animate="animate"
                className="relative grid grid-cols-12 gap-4 my-3">
                { projects.map(project => (
                    <motion.div 
                        variants={fadeInpUp}
                        key={project.name}
                        className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 dark:bg-dark-200 lg:col-span-4">
                        <ProjectCard project={project} showDetails={showDetails}  setShowDetails={setShowDetails} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default project
