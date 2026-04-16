import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

export default function Blank() {
  const { t } = useTranslation();

  return (
    <div>
      <PageMeta
        title={t("pages.blank.title")}
        description={t("pages.blank.description")}
      />
      <PageBreadcrumb pageTitle={t("pages.blank.title")} />
      <div className="rounded-sm border border-stroke bg-white p-6 shadow-sm dark:border-strokedark dark:bg-boxdark">
        <h1 className="mb-4 text-xl font-bold text-boxdark dark:text-white">
          {t("pages.blank.title")}
        </h1>
        <p className="text-gray-400 dark:text-gray-400">
          {t("pages.blank.description")}. You can use components from{" "}
          <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-meta-4">src/components/ui/</code>
        </p>
      </div>
    </div>
  );
}
