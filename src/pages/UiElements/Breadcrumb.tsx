import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";

export default function Breadcrumb() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta title="Breadcrumb | TailAdmin" description="Breadcrumb examples" />
      <PageBreadcrumb pageTitle={t("menu.breadcrumb")} />
      <div className="space-y-6">
        <ComponentCard title={t("pages.breadcrumb.basic")}>
          <nav className="flex text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="#" className="text-blue-600 hover:text-blue-700">{t("pages.breadcrumb.home")}</a></li>
              <li className="text-gray-400">/</li>
              <li><a href="#" className="text-blue-600 hover:text-blue-700">{t("pages.breadcrumb.components")}</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-800 dark:text-gray-200">{t("menu.breadcrumb")}</li>
            </ol>
          </nav>
        </ComponentCard>
        <ComponentCard title={t("pages.breadcrumb.withIcons")}>
          <nav className="flex text-sm">
            <ol className="flex items-center space-x-2">
              <li><a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">{t("pages.breadcrumb.homeIcon")} {t("pages.breadcrumb.home")}</a></li>
              <li className="text-gray-400">/</li>
              <li><a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">{t("pages.breadcrumb.componentsIcon")} {t("pages.breadcrumb.components")}</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-800 dark:text-gray-200 flex items-center gap-1">{t("pages.breadcrumb.breadcrumbIcon")} {t("menu.breadcrumb")}</li>
            </ol>
          </nav>
        </ComponentCard>
      </div>
    </>
  );
}