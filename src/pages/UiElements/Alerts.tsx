import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import Alert from "../../components/ui/alert/Alert";
import PageMeta from "../../components/common/PageMeta";

export default function Alerts() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("pages.alerts.title")}
        description={t("pages.alerts.description")}
      />
      <PageBreadcrumb pageTitle={t("pages.alerts.title")} />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title={t("ui.alerts.success")}>
          <Alert
            variant="success"
            title={t("common.success")}
            message={t("messages.confirmAction")}
            showLink={true}
            linkHref="/"
            linkText={t("common.learnMore")}
          />
          <Alert
            variant="success"
            title={t("common.success")}
            message={t("messages.confirmAction")}
            showLink={false}
          />
        </ComponentCard>
        <ComponentCard title={t("ui.alerts.warning")}>
          <Alert
            variant="warning"
            title={t("common.warning")}
            message={t("messages.confirmAction")}
            showLink={true}
            linkHref="/"
            linkText={t("common.learnMore")}
          />
          <Alert
            variant="warning"
            title={t("common.warning")}
            message={t("messages.confirmAction")}
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title={t("ui.alerts.error")}>
          <Alert
            variant="error"
            title={t("common.error")}
            message={t("messages.confirmAction")}
            showLink={true}
            linkHref="/"
            linkText={t("common.learnMore")}
          />
          <Alert
            variant="error"
            title={t("common.error")}
            message={t("messages.confirmAction")}
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title={t("ui.alerts.info")}>
          <Alert
            variant="info"
            title={t("common.info")}
            message={t("messages.confirmAction")}
            showLink={true}
            linkHref="/"
            linkText={t("common.learnMore")}
          />
          <Alert
            variant="info"
            title={t("common.info")}
            message={t("messages.confirmAction")}
            showLink={false}
          />
        </ComponentCard>
      </div>
    </>
  );
}
