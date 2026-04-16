import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
import ThreeColumnImageGrid from "../../components/ui/images/ThreeColumnImageGrid";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";

export default function Images() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("pages.images.title")}
        description={t("pages.images.description")}
      />
      <PageBreadcrumb pageTitle={t("pages.images.title")} />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title={t("ui.images.responsive")}>
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title={t("ui.images.twoColumnGrid")}>
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title={t("ui.images.threeColumnGrid")}>
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </>
  );
}
