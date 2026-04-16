import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function Progressbar() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Progressbar | TailAdmin" description="Progress bar examples" />
      <PageBreadcrumb pageTitle={t("menu.progressbar")} />
      <div className="space-y-6">
        <ComponentCard title={t("pages.progressbar.basic")}>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-300">{t("pages.progressbar.basic")}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-300">{t("common.success")}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">100%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-300">{t("common.warning")}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">45%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>
        </ComponentCard>
        <ComponentCard title={t("pages.progressbar.sizes")}>
          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">{t("pages.progressbar.small")}</span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                <div className="bg-blue-600 h-1 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">{t("pages.progressbar.medium")}</span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">{t("pages.progressbar.large")}</span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}