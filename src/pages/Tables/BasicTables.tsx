import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

export default function BasicTables() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("pages.basicTables.title")}
        description={t("pages.basicTables.description")}
      />
      <PageBreadcrumb pageTitle={t("pages.basicTables.title")} />
      <div className="space-y-6">
        <ComponentCard title={`${t("pages.basicTables.title")} 1`}>
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
