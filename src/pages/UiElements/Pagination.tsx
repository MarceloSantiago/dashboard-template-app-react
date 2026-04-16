import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function Pagination() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Pagination | TailAdmin" description="Pagination examples" />
      <PageBreadcrumb pageTitle={t("menu.pagination")} />
      <div className="space-y-6">
        <ComponentCard title={t("pages.pagination.basic")}>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">{t("common.previous")}</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">3</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">{t("common.next")}</button>
          </div>
        </ComponentCard>
        <ComponentCard title={t("pages.pagination.withEllipsis")}>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">2</button>
            <span className="px-2 py-1">...</span>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">9</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">10</button>
          </div>
        </ComponentCard>
        <ComponentCard title={t("pages.pagination.sizes")}>
          <div className="space-y-4">
            <div className="flex gap-2">
              <button className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">{t("pages.pagination.small")}</button>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">{t("pages.pagination.medium")}</button>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-base border border-gray-200 rounded hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">{t("pages.pagination.large")}</button>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}