import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const transactions = [
  { id: "TXN-001", order: "ORD-2024-001", customer: "John Smith", amount: "$599.00", method: "Credit Card", date: "2024-01-15", status: "Completed" },
  { id: "TXN-002", order: "ORD-2024-002", customer: "Sarah Johnson", amount: "$1,299.00", method: "PayPal", date: "2024-01-16", status: "Completed" },
  { id: "TXN-003", order: "ORD-2024-003", customer: "Mike Brown", amount: "$249.00", method: "Bank Transfer", date: "2024-01-17", status: "Pending" },
  { id: "TXN-004", order: "ORD-2024-004", customer: "Emily Davis", amount: "$899.00", method: "Credit Card", date: "2024-01-18", status: "Failed" },
];

export default function Transactions() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Transactions | TailAdmin" description="Transaction history" />
      <PageBreadcrumb pageTitle={t("menu.transactions")} />
      <div className="space-y-6">
        <ComponentCard title="All Transactions">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">TXN ID</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Order</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Customer</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Amount</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Method</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Date</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {transactions.map((txn) => (
                  <tr key={txn.id}>
                    <td className="py-3 px-6 text-gray-800 dark:text-white font-mono text-sm">{txn.id}</td>
                    <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{txn.order}</td>
                    <td className="py-3 px-6 text-gray-800 dark:text-white">{txn.customer}</td>
                    <td className="py-3 px-6 text-gray-800 dark:text-white font-semibold">{txn.amount}</td>
                    <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{txn.method}</td>
                    <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{txn.date}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        txn.status === "Completed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        txn.status === "Pending" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>
                        {txn.status}
                      </span>
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