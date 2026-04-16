import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function Tabs() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Tabs | TailAdmin" description="Tab examples" />
      <PageBreadcrumb pageTitle={t("menu.tabs")} />
      <div className="space-y-6">
        <ComponentCard title={t("pages.tabs.horizontal")}>
          <div>
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">{t("pages.tabs.tab1")}</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400">{t("pages.tabs.tab2")}</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400">{t("pages.tabs.tab3")}</button>
            </div>
            <div className="py-4">
              <p className="text-gray-600 dark:text-gray-300">{t("pages.tabs.tab1Content")}</p>
            </div>
          </div>
        </ComponentCard>
        <ComponentCard title={t("pages.tabs.vertical")}>
          <div className="flex gap-4">
            <div className="flex flex-col border-r border-gray-200 dark:border-gray-700 pr-4">
              <button className="px-4 py-2 text-blue-600 font-medium text-left">{t("pages.tabs.profile")}</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 text-left">{t("pages.tabs.settings")}</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 text-left">{t("pages.tabs.security")}</button>
            </div>
            <div className="flex-1">
              <p className="text-gray-600 dark:text-gray-300">{t("pages.tabs.verticalContent")}</p>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}