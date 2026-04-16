import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function Cards() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Cards | TailAdmin" description="Card examples" />
      <PageBreadcrumb pageTitle={t("menu.cards")} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ComponentCard title={t("pages.cards.basic")}>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{t("pages.cards.cardTitle")}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{t("pages.cards.basicContent")}</p>
          </div>
        </ComponentCard>
        <ComponentCard title={t("pages.cards.withHeader")}>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-3">
              <h4 className="font-semibold text-gray-800 dark:text-white">{t("pages.cards.cardHeader")}</h4>
            </div>
            <div className="p-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">{t("pages.cards.cardBody")}</p>
            </div>
          </div>
        </ComponentCard>
        <ComponentCard title={t("pages.cards.withFooter")}>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="p-4">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{t("pages.cards.cardTitle")}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{t("pages.cards.cardBody")}</p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex justify-end gap-2">
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400">{t("common.cancel")}</button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">{t("common.save")}</button>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}