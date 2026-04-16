import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

const columns = {
  todo: { title: "To Do", tasks: [{ id: 1, title: "Design new dashboard" }, { id: 2, title: "Implement auth" }] },
  inProgress: { title: "In Progress", tasks: [{ id: 3, title: "Write docs" }] },
  review: { title: "Review", tasks: [{ id: 4, title: "Bug fixes" }] },
  done: { title: "Done", tasks: [{ id: 5, title: "Setup project" }] },
};

export default function Kanban() {
  return (
    <>
      <PageMeta title="Kanban Board | TailAdmin" description="Kanban board" />
      <PageBreadcrumb pageTitle="Kanban Board" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.entries(columns).map(([key, column]) => (
              <div key={key} className="rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-white/[0.03] p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">{column.title}</h3>
                <div className="space-y-3">
                  {column.tasks.map((task) => (
                    <div key={task.id} className="rounded-lg bg-white p-3 shadow-sm dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">{task.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}