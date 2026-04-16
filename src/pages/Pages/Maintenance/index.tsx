import { useTranslation } from "react-i18next";
import PageMeta from "../../../components/common/PageMeta";
import GridShape from "../../../components/common/GridShape";

export default function Maintenance() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Maintenance | TailAdmin" description="Maintenance page" />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1 bg-white dark:bg-gray-900">
        <GridShape />
        <div className="mx-auto text-center">
          <img src="/images/error/maintenance.svg" alt="Maintenance" className="dark:hidden mx-auto mb-8" />
          <img src="/images/error/maintenance-dark.svg" alt="Maintenance" className="hidden dark:block mx-auto mb-8" />
          <h1 className="mb-4 font-bold text-gray-800 text-3xl dark:text-white/90">{t("menu.maintenance")}</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {t("pages.maintenance.description")}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} - TailAdmin</p>
        </div>
      </div>
    </>
  );
}