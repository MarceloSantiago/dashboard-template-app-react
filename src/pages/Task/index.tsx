import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

const tasks = [
  { id: 1, title: "Design new dashboard", assignee: "John", status: "In Progress", priority: "High", due: "Jan 20" },
  { id: 2, title: "Implement authentication", assignee: "Sarah", status: "To Do", priority: "High", due: "Jan 22" },
  { id: 3, title: "Write documentation", assignee: "Mike", status: "Review", priority: "Medium", due: "Jan 25" },
  { id: 4, title: "Fix navigation bug", assignee: "Emily", status: "Done", priority: "Low", due: "Jan 15" },
];

export default function TaskList() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Task List | TailAdmin" description="Task management" />
      <PageBreadcrumb pageTitle={t("menu.taskList")} />
      <div className="space-y-6">
        <ComponentCard title="Tasks">
          <div className="p-4 border-b border-gray-100 dark:border-gray-800">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Add Task
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Task</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Assignee</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Priority</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Due</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td className="py-3 px-6 text-gray-800 dark:text-white font-medium">{task.title}</td>
                    <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{task.assignee}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.status === "Done" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        task.status === "In Progress" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                        task.status === "Review" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      }`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.priority === "High" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                        task.priority === "Medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{task.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}