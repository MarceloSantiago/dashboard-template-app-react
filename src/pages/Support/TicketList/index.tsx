import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const tickets = [
  { id: "TKT-001", subject: "Login issue", status: "Open", priority: "High", created: "2024-01-15" },
  { id: "TKT-002", subject: "Billing question", status: "Pending", priority: "Medium", created: "2024-01-16" },
  { id: "TKT-003", subject: "Feature request", status: "Closed", priority: "Low", created: "2024-01-17" },
  { id: "TKT-004", subject: "Account access", status: "Open", priority: "High", created: "2024-01-18" },
];

export default function TicketList() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Ticket List | TailAdmin" description="Support tickets" />
      <PageBreadcrumb pageTitle={t("menu.ticketList")} />
      <div className="space-y-6">
        <ComponentCard title="All Support Tickets">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Ticket ID</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Subject</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Priority</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Created</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="py-3 px-6 text-gray-800 dark:text-white font-mono">{ticket.id}</td>
                    <td className="py-3 px-6 text-gray-800 dark:text-white">{ticket.subject}</td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        ticket.status === "Open" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        ticket.status === "Pending" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      }`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-3 px-6">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        ticket.priority === "High" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                        ticket.priority === "Medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-gray-500 dark:text-gray-400">{ticket.created}</td>
                    <td className="py-3 px-6">
                      <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400">View</button>
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