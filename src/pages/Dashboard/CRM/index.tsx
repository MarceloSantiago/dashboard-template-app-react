import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function CRM() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title="CRM Dashboard | TailAdmin"
        description="CRM Dashboard for TailAdmin - React.js Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle={t("menu.crm")} />
      <div className="space-y-6">
        <ComponentCard title="CRM Overview">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Contacts</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">3,542</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Deals</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">156</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Win Rate</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">68%</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Revenue</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$284K</p>
            </div>
          </div>
        </ComponentCard>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <ComponentCard title="Recent Leads">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">John Smith</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">john@company.com</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Hot</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">sarah@startup.io</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">Warm</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Mike Brown</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">mike@enterprise.com</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Cold</span>
                </div>
              </div>
            </ComponentCard>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ComponentCard title="Active Deals">
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800 dark:text-white">Enterprise License</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">$45,000</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800 dark:text-white">Premium Support</span>
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">$12,000</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
              </div>
            </ComponentCard>
          </div>
        </div>
      </div>
    </>
  );
}