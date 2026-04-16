import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function Modals() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Modals | TailAdmin" description="Modal examples" />
      <PageBreadcrumb pageTitle={t("menu.modals")} />
      <div className="space-y-6">
        <ComponentCard title={t("pages.modals.sizes")}>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">{t("pages.modals.small")}</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">{t("pages.modals.medium")}</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">{t("pages.modals.large")}</button>
          </div>
        </ComponentCard>
        <ComponentCard title={t("pages.modals.examples")}>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">{t("pages.modals.confirmation")}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{t("messages.confirmDelete")}</p>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">{t("common.cancel")}</button>
                <button className="px-3 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">{t("common.delete")}</button>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}