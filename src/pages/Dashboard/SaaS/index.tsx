import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function SaaS() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title="SaaS Metrics | TailAdmin"
        description="SaaS Metrics Dashboard for TailAdmin - React.js Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle={t("menu.saas")} />
      <div className="space-y-6">
        <ComponentCard title="SaaS Metrics">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">MRR</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$48,200</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">ARR</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$578,400</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Churn Rate</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">2.4%</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">LTV</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$2,840</p>
            </div>
          </div>
        </ComponentCard>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <ComponentCard title="Subscription Breakdown">
              <div className="space-y-4">
                {[
                  { name: "Basic Plan", value: 45, color: "bg-blue-500" },
                  { name: "Pro Plan", value: 35, color: "bg-purple-500" },
                  { name: "Enterprise", value: 20, color: "bg-green-500" },
                ].map((plan) => (
                  <div key={plan.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700 dark:text-gray-300">{plan.name}</span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">{plan.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className={`${plan.color} h-3 rounded-full`} style={{ width: `${plan.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </ComponentCard>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ComponentCard title="Monthly Recurring Revenue">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">This Month</span>
                  <span className="font-bold text-green-600 dark:text-green-400">$48,200</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Last Month</span>
                  <span className="font-bold text-gray-800 dark:text-white">$45,100</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Growth</span>
                  <span className="font-bold text-green-600 dark:text-green-400">+6.9%</span>
                </div>
              </div>
            </ComponentCard>
          </div>
        </div>
      </div>
    </>
  );
}