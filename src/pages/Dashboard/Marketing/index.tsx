import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function Marketing() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title="Marketing Dashboard | TailAdmin"
        description="Marketing Dashboard for TailAdmin - React.js Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle={t("menu.marketing")} />
      <div className="space-y-6">
        <ComponentCard title="Marketing Overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Campaigns</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">24</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Leads</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">1,284</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Conversions</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">8.5%</p>
            </div>
          </div>
        </ComponentCard>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <ComponentCard title="Recent Campaigns">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Summer Sale 2024</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">New Product Launch</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Planning</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Holiday Promo</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">Draft</span>
                </div>
              </div>
            </ComponentCard>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ComponentCard title="Top Channels">
              <div className="space-y-4">
                {[
                  { name: "Email Marketing", value: 35, color: "bg-blue-500" },
                  { name: "Social Media", value: 28, color: "bg-purple-500" },
                  { name: "Paid Ads", value: 22, color: "bg-green-500" },
                ].map((channel) => (
                  <div key={channel.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700 dark:text-gray-300">{channel.name}</span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">{channel.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className={`${channel.color} h-2 rounded-full`} style={{ width: `${channel.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </ComponentCard>
          </div>
        </div>
      </div>
    </>
  );
}