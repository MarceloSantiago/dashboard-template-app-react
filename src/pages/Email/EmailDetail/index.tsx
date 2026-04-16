import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

export default function EmailDetail() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Email | TailAdmin" description="Email detail" />
      <PageBreadcrumb pageTitle={t("menu.emailDetail")} />
      <div className="space-y-6">
        <ComponentCard title="Weekly Newsletter - New Features" desc="From: newsletter@company.com | Jan 15, 2024 10:30 AM">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">Dear Customer,</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We're excited to share our latest features and improvements with you this week!
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
              <li>New dashboard design with improved metrics visualization</li>
              <li>Enhanced search functionality across all pages</li>
              <li>Dark mode support for all components</li>
              <li>Performance improvements and bug fixes</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Stay tuned for more updates coming soon!
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Best regards,<br />
              The Team
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              Reply
            </button>
            <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              Forward
            </button>
            <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:border-gray-700 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-red-900/20">
              Delete
            </button>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}