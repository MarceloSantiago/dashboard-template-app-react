import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const invoices = [
  { id: "INV-001", customer: "Acme Corp", amount: "$2,400", date: "2024-01-15", status: "Paid" },
  { id: "INV-002", customer: "TechStart Inc", amount: "$1,850", date: "2024-01-18", status: "Pending" },
  { id: "INV-003", customer: "GlobalTech", amount: "$3,200", date: "2024-01-20", status: "Overdue" },
  { id: "INV-004", customer: "StartupXYZ", amount: "$950", date: "2024-01-22", status: "Paid" },
];

export default function Invoices() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Invoices | TailAdmin" description="Invoice management" />
      <PageBreadcrumb pageTitle={t("menu.invoices")} />
      <div className="space-y-6">
        <ComponentCard title="All Invoices">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Invoice</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Customer</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Amount</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Date</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="py-3 px-6 text-gray-800 dark:text-white font-mono">{invoice.id}</td>
                    <td className="py-3 px-6 text-gray-800 dark:text-white">{invoice.customer}</td>
                    <td className="py-3 px-6 text-gray-800 dark:text-white font-semibold">{invoice.amount}</td>
                    <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{invoice.date}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        invoice.status === "Paid" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        invoice.status === "Pending" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 mr-2">View</button>
                      <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400">Download</button>
                    </td>
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