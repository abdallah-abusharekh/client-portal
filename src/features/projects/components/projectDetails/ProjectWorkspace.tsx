import { ProjectTask } from "../../types/project.types";
import ProjectTasks from "./ProjectTasks";
import ProjectFiles from "./ProjectFiles";
import ProjectChat from "./ProjectChat";

type Props = {
  activeTab: "tasks" | "files" | "chat";
  tasks: ProjectTask[];
};

export default function ProjectWorkspace({ activeTab, tasks }: Props) {
  return (
    <div className="space-y-6 col-start-1 col-end-3 h-full">
      {activeTab === "tasks" && <ProjectTasks tasks={tasks} />}
      {activeTab === "files" && <ProjectFiles />}
      {activeTab === "chat" && <ProjectChat />}
    </div>
  );
}
