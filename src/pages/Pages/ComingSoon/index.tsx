import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";

export default function ComingSoon() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Coming Soon | TailAdmin" description="Coming soon page" />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1 bg-white dark:bg-gray-900">
        <div className="mx-auto text-center">
          <h1 className="mb-4 font-bold text-gray-800 text-4xl dark:text-white/90">{t("menu.comingSoon")}</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">{t("pages.comingSoon.description")}</p>
          <div className="flex justify-center gap-4 text-center">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">15</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t("pages.comingSoon.days")}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">08</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t("pages.comingSoon.hours")}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">45</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t("pages.comingSoon.minutes")}</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">32</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t("pages.comingSoon.seconds")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}