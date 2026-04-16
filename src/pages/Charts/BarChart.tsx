import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function BarChart() {
  const { t } = useTranslation();

  return (
    <div>
      <PageMeta
        title={t("pages.barChart.title")}
        description={t("pages.barChart.description")}
      />
      <PageBreadcrumb pageTitle={t("pages.barChart.title")} />
      <div className="space-y-6">
        <ComponentCard title={`${t("pages.barChart.title")} 1`}>
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
