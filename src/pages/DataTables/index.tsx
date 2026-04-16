import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

const data = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Mike Brown", email: "mike@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Admin", status: "Active" },
  { id: 5, name: "Chris Wilson", email: "chris@example.com", role: "Editor", status: "Pending" },
];

export default function DataTables() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Data Tables | TailAdmin" description="Advanced data tables" />
      <PageBreadcrumb pageTitle={t("menu.dataTables")} />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">{t("pages.dataTables.title")}</h3>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                {t("common.export")}
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">{t("tables.name")}</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">{t("tables.email")}</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">{t("tables.role")}</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">{t("tables.status")}</th>
                    <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">{t("tables.actions")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {data.map((user) => (
                    <tr key={user.id}>
                      <td className="py-3 px-6">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                      </td>
                      <td className="py-3 px-6 text-gray-800 dark:text-white font-medium">{user.name}</td>
                      <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{user.email}</td>
                      <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{user.role}</td>
                      <td className="py-3 px-6">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                          user.status === "Inactive" ? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400" :
                          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-6">
                        <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 mr-2">{t("common.edit")}</button>
                        <button className="text-red-600 hover:text-red-800 dark:text-red-400">{t("common.delete")}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}