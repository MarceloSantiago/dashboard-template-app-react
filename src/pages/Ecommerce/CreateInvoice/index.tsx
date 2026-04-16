import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function CreateInvoice() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Create Invoice | TailAdmin" description="Create new invoice" />
      <PageBreadcrumb pageTitle={t("menu.createInvoice")} />
      <div className="space-y-6">
        <ComponentCard title="Create New Invoice">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Customer</label>
                <select className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none">
                  <option>Select customer</option>
                  <option>Acme Corp</option>
                  <option>TechStart Inc</option>
                  <option>GlobalTech</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Invoice Date</label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Due Date</label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Amount</label>
                <input
                  type="text"
                  placeholder="$0.00"
                  className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Notes</label>
              <textarea
                rows={3}
                placeholder="Add notes..."
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button type="button" className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                Cancel
              </button>
              <button type="submit" className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
                Create Invoice
              </button>
            </div>
          </form>
        </ComponentCard>
      </div>
    </>
  );
}