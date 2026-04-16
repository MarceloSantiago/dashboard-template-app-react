import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function Billing() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Billing | TailAdmin" description="Billing management" />
      <PageBreadcrumb pageTitle={t("menu.billing")} />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <ComponentCard title="Billing Information">
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 dark:text-gray-400">Current Plan</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Pro</span>
                </div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">$29/month</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Next billing date</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">February 15, 2024</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Payment method</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">Visa ending in 4242</p>
              </div>
            </div>
            <button className="mt-6 rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              Update Payment Method
            </button>
          </ComponentCard>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ComponentCard title="Billing History">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Jan 15, 2024</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pro Plan</p>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">$29</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Dec 15, 2023</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pro Plan</p>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">$29</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Nov 15, 2023</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pro Plan</p>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">$29</span>
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </>
  );
}