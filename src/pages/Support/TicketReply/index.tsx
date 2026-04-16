import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function TicketReply() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Ticket Reply | TailAdmin" description="Reply to ticket" />
      <PageBreadcrumb pageTitle={t("menu.ticketReply")} />
      <div className="space-y-6">
        <ComponentCard title="Ticket #TKT-001" desc="Login issue">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Open</span>
          </div>
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-gray-800 dark:text-white">John Smith</span>
                <span className="text-xs text-gray-400">Jan 15, 2024 10:30 AM</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Hi, I'm having trouble logging into my account. I forgot my password and the reset email isn't arriving. Can you help?</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg ml-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-blue-700 dark:text-blue-400">Support Agent</span>
                <span className="text-xs text-gray-400">Jan 15, 2024 10:45 AM</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Hello John! I've checked your account. The reset email was sent but seems to have been blocked. I've manually triggered a new password reset for you. Please check your inbox within the next few minutes.</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Reply</label>
            <textarea
              rows={4}
              placeholder="Type your reply..."
              className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              Close Ticket
            </button>
            <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
              Send Reply
            </button>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}