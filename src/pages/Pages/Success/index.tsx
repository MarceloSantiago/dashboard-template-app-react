import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import GridShape from "../../../components/common/GridShape";

export default function Success() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Success | TailAdmin" description="Success page" />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1 bg-white dark:bg-gray-900">
        <GridShape />
        <div className="mx-auto text-center">
          <img src="/images/error/success.svg" alt="Success" className="dark:hidden mx-auto mb-8" />
          <img src="/images/error/success-dark.svg" alt="Success" className="hidden dark:block mx-auto mb-8" />
          <h1 className="mb-4 font-bold text-gray-800 text-3xl dark:text-white/90">{t("common.success")}!</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {t("pages.success.description")}
          </p>
          <a href="/" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">
            {t("pages.error.backToHome")}
          </a>
        </div>
      </div>
    </>
  );
}