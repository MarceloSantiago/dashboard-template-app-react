import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const emails = [
  { id: 1, from: "newsletter@company.com", subject: "Weekly Newsletter - New Features", preview: "Check out our latest features...", time: "10:30 AM", unread: true, starred: false },
  { id: 2, from: "support@service.com", subject: "Your support ticket has been resolved", preview: "Thank you for contacting us...", time: "9:15 AM", unread: true, starred: true },
  { id: 3, from: "billing@company.com", subject: "Invoice #12345 available", preview: "Your invoice is ready...", time: "Yesterday", unread: false, starred: false },
  { id: 4, from: "team@company.com", subject: "Meeting notes from today", preview: "Here are the notes from our meeting...", time: "Yesterday", unread: false, starred: false },
];

export default function Inbox() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Inbox | TailAdmin" description="Email inbox" />
      <PageBreadcrumb pageTitle={t("menu.inbox")} />
      <div className="space-y-6">
        <ComponentCard title="Inbox">
          <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex gap-4">
            <input
              type="text"
              placeholder="Search emails..."
              className="flex-1 rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
            />
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700">
              Compose
            </button>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {emails.map((email) => (
              <div key={email.id} className={`p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${email.unread ? "bg-blue-50/50 dark:bg-blue-900/10" : ""}`}>
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                <button className={`${email.starred ? "text-yellow-500" : "text-gray-300"} hover:text-yellow-500`}>
                  ★
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className={`font-medium truncate ${email.unread ? "text-gray-800 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}>
                      {email.from}
                    </p>
                    <span className="text-xs text-gray-400">{email.time}</span>
                  </div>
                  <p className={`truncate ${email.unread ? "text-gray-800 dark:text-gray-200 font-medium" : "text-gray-500 dark:text-gray-400"}`}>
                    {email.subject}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{email.preview}</p>
                </div>
              </div>
            ))}
          </div>
        </ComponentCard>
      </div>
    </>
  );
}