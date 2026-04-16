import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

const keys = [
  { name: "Production API Key", key: "sk_live_********************1234", created: "Jan 15, 2024", lastUsed: "Today" },
  { name: "Development API Key", key: "sk_test_********************5678", created: "Jan 10, 2024", lastUsed: "Yesterday" },
  { name: "Analytics Key", key: "ak_********************9012", created: "Jan 5, 2024", lastUsed: "3 days ago" },
];

export default function APIKeys() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="API Keys | TailAdmin" description="API key management" />
      <PageBreadcrumb pageTitle={t("menu.apiKeys")} />
      <div className="space-y-6">
        <ComponentCard title="API Keys">
          <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Generate New Key
            </button>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {keys.map((item, i) => (
              <div key={i} className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-800 dark:text-white">{item.name}</h4>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm">Copy</button>
                    <button className="text-red-600 hover:text-red-800 dark:text-red-400 text-sm">Revoke</button>
                  </div>
                </div>
                <p className="font-mono text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded mb-2">{item.key}</p>
                <div className="flex gap-4 text-sm text-gray-400">
                  <span>Created: {item.created}</span>
                  <span>Last used: {item.lastUsed}</span>
                </div>
              </div>
            ))}
          </div>
        </ComponentCard>
      </div>
    </>
  );
}