import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const integrations = [
  { name: "Slack", description: "Receive notifications in Slack", status: "Connected", icon: "💬" },
  { name: "GitHub", description: "Sync with GitHub repositories", status: "Connected", icon: "🐙" },
  { name: "Stripe", description: "Payment processing integration", status: "Disconnected", icon: "💳" },
  { name: "Google Analytics", description: "Track website analytics", status: "Connected", icon: "📊" },
];

export default function Integrations() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Integrations | TailAdmin" description="Third-party integrations" />
      <PageBreadcrumb pageTitle={t("menu.integrations")} />
      <div className="space-y-6">
        <ComponentCard title="Integrations">
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {integrations.map((item, i) => (
              <div key={i} className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    item.status === "Connected" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                  }`}>
                    {item.status}
                  </span>
                  <button className={`px-4 py-1.5 text-sm rounded-lg ${item.status === "Connected" ? "border border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                    {item.status === "Connected" ? "Disconnect" : "Connect"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ComponentCard>
      </div>
    </>
  );
}