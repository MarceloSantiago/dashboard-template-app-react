import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function Logistics() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title="Logistics Dashboard | TailAdmin"
        description="Logistics Dashboard for TailAdmin - React.js Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle={t("menu.logistics")} />
      <div className="space-y-6">
        <ComponentCard title="Logistics Overview">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Shipments</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">1,847</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">In Transit</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">324</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Delivered</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">1,498</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">25</p>
            </div>
          </div>
        </ComponentCard>

        <ComponentCard title="Recent Shipments">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Tracking ID</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Destination</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">ETA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr>
                  <td className="py-3 px-4 text-gray-800 dark:text-white font-mono">TRK-2024-001</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">New York, NY</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">In Transit</span></td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">2 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-800 dark:text-white font-mono">TRK-2024-002</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">Los Angeles, CA</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Delivered</span></td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">Completed</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-800 dark:text-white font-mono">TRK-2024-003</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">Chicago, IL</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">Pending</span></td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">5 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}