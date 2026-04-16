import { useTranslation } from "react-i18next";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

export default function PieChart() {
  const { t } = useTranslation();
  const options: ApexOptions = {
    labels: [t("charts.deviceUsage"), t("charts.mobile"), t("charts.tablet")],
    colors: ["#465FFF", "#9CB9FF", "#6380FC"],
    chart: {
      type: "pie",
      fontFamily: "Outfit, sans-serif",
    },
    stroke: {
      show: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Outfit",
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
    },
  };

  const series = [45, 35, 20];

  return (
    <>
      <PageMeta title="Pie Chart | TailAdmin" description="Pie chart example" />
      <PageBreadcrumb pageTitle={t("menu.pieChart")} />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 lg:col-span-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">{t("charts.deviceUsage")}</h3>
            <Chart options={options} series={series} type="pie" height={300} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">{t("charts.trafficSources")}</h3>
            <Chart
              options={{
                ...options,
                labels: [t("charts.direct"), t("charts.organicSearch"), t("charts.referral"), t("charts.social")],
              }}
              series={[30, 40, 20, 10]}
              type="pie"
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}