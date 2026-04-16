import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import LineChartOne from "../../components/charts/line/LineChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function LineChart() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("pages.lineChart.title")}
        description={t("pages.lineChart.description")}
      />
      <PageBreadcrumb pageTitle={t("pages.lineChart.title")} />
      <div className="space-y-6">
        <ComponentCard title={`${t("pages.lineChart.title")} 1`}>
          <LineChartOne />
        </ComponentCard>
      </div>
    </>
  );
}
