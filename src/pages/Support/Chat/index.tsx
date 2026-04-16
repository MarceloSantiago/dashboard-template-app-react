import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const messages = [
  { id: 1, sender: "John Smith", avatar: "", lastMessage: "Hi, I need help with my order", time: "10:30 AM", unread: true },
  { id: 2, sender: "Sarah Johnson", avatar: "", lastMessage: "When will my order arrive?", time: "9:15 AM", unread: true },
  { id: 3, sender: "Mike Brown", avatar: "", lastMessage: "Thanks for your help!", time: "Yesterday", unread: false },
  { id: 4, sender: "Emily Davis", avatar: "", lastMessage: "I have a question about billing", time: "Yesterday", unread: false },
];

export default function Chat() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Chat | TailAdmin" description="Customer chat" />
      <PageBreadcrumb pageTitle={t("menu.chat")} />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4">
          <ComponentCard title="Conversations">
            <div className="p-4 border-b border-gray-100 dark:border-gray-800">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {messages.map((msg) => (
                <div key={msg.id} className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${msg.unread ? "bg-blue-50/50 dark:bg-blue-900/10" : ""}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                      {msg.sender[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <p className={`font-medium truncate ${msg.unread ? "text-gray-800 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
                          {msg.sender}
                        </p>
                        <span className="text-xs text-gray-400">{msg.time}</span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{msg.lastMessage}</p>
                    </div>
                    {msg.unread && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                  </div>
                </div>
              ))}
            </div>
          </ComponentCard>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <ComponentCard title="John Smith" desc="Online">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="max-w-[70%] rounded-lg bg-gray-100 dark:bg-gray-800 p-3">
                  <p className="text-gray-800 dark:text-gray-200">Hi, I need help with my order #12345</p>
                  <span className="text-xs text-gray-400 mt-1 block">10:30 AM</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[70%] rounded-lg bg-blue-500 p-3">
                  <p className="text-white">Hello John! How can I assist you today?</p>
                  <span className="text-xs text-blue-100 mt-1 block">10:32 AM</span>
                </div>
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </>
  );
}