import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import Badge from "../../components/ui/badge/Badge";
import { PlusIcon } from "../../icons";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";

export default function Badges() {
  const { t } = useTranslation();

  return (
    <div>
      <PageMeta
        title={t("pages.badges.title")}
        description={t("pages.badges.description")}
      />
      <PageBreadcrumb pageTitle={t("pages.badges.title")} />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title={t("ui.badges.withLightBackground")}>
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            {/* Light Variant */}
            <Badge variant="light" color="primary">
              {t("ui.badges.primary")}
            </Badge>
            <Badge variant="light" color="success">
              {t("ui.badges.success")}
            </Badge>{" "}
            <Badge variant="light" color="error">
              {t("ui.badges.danger")}
            </Badge>{" "}
            <Badge variant="light" color="warning">
              {t("ui.badges.warning")}
            </Badge>{" "}
            <Badge variant="light" color="info">
              {t("ui.badges.info")}
            </Badge>
            <Badge variant="light" color="light">
              {t("ui.badges.light")}
            </Badge>
            <Badge variant="light" color="dark">
              {t("ui.badges.dark")}
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title={t("ui.badges.withSolidBackground")}>
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            {/* Light Variant */}
            <Badge variant="solid" color="primary">
              {t("ui.badges.primary")}
            </Badge>
            <Badge variant="solid" color="success">
              {t("ui.badges.success")}
            </Badge>{" "}
            <Badge variant="solid" color="error">
              {t("ui.badges.danger")}
            </Badge>{" "}
            <Badge variant="solid" color="warning">
              {t("ui.badges.warning")}
            </Badge>{" "}
            <Badge variant="solid" color="info">
              {t("ui.badges.info")}
            </Badge>
            <Badge variant="solid" color="light">
              {t("ui.badges.light")}
            </Badge>
            <Badge variant="solid" color="dark">
              {t("ui.badges.dark")}
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title={t("ui.badges.lightBackgroundWithLeftIcon")}>
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="light" color="primary" startIcon={<PlusIcon />}>
              {t("ui.badges.primary")}
            </Badge>
            <Badge variant="light" color="success" startIcon={<PlusIcon />}>
              {t("ui.badges.success")}
            </Badge>{" "}
            <Badge variant="light" color="error" startIcon={<PlusIcon />}>
              {t("ui.badges.danger")}
            </Badge>{" "}
            <Badge variant="light" color="warning" startIcon={<PlusIcon />}>
              {t("ui.badges.warning")}
            </Badge>{" "}
            <Badge variant="light" color="info" startIcon={<PlusIcon />}>
              {t("ui.badges.info")}
            </Badge>
            <Badge variant="light" color="light" startIcon={<PlusIcon />}>
              {t("ui.badges.light")}
            </Badge>
            <Badge variant="light" color="dark" startIcon={<PlusIcon />}>
              {t("ui.badges.dark")}
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title={t("ui.badges.solidBackgroundWithLeftIcon")}>
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="solid" color="primary" startIcon={<PlusIcon />}>
              {t("ui.badges.primary")}
            </Badge>
            <Badge variant="solid" color="success" startIcon={<PlusIcon />}>
              {t("ui.badges.success")}
            </Badge>{" "}
            <Badge variant="solid" color="error" startIcon={<PlusIcon />}>
              {t("ui.badges.danger")}
            </Badge>{" "}
            <Badge variant="solid" color="warning" startIcon={<PlusIcon />}>
              {t("ui.badges.warning")}
            </Badge>{" "}
            <Badge variant="solid" color="info" startIcon={<PlusIcon />}>
              {t("ui.badges.info")}
            </Badge>
            <Badge variant="solid" color="light" startIcon={<PlusIcon />}>
              {t("ui.badges.light")}
            </Badge>
            <Badge variant="solid" color="dark" startIcon={<PlusIcon />}>
              {t("ui.badges.dark")}
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title={t("ui.badges.lightBackgroundWithRightIcon")}>
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="light" color="primary" endIcon={<PlusIcon />}>
              {t("ui.badges.primary")}
            </Badge>
            <Badge variant="light" color="success" endIcon={<PlusIcon />}>
              {t("ui.badges.success")}
            </Badge>{" "}
            <Badge variant="light" color="error" endIcon={<PlusIcon />}>
              {t("ui.badges.danger")}
            </Badge>{" "}
            <Badge variant="light" color="warning" endIcon={<PlusIcon />}>
              {t("ui.badges.warning")}
            </Badge>{" "}
            <Badge variant="light" color="info" endIcon={<PlusIcon />}>
              {t("ui.badges.info")}
            </Badge>
            <Badge variant="light" color="light" endIcon={<PlusIcon />}>
              {t("ui.badges.light")}
            </Badge>
            <Badge variant="light" color="dark" endIcon={<PlusIcon />}>
              {t("ui.badges.dark")}
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title={t("ui.badges.solidBackgroundWithRightIcon")}>
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="solid" color="primary" endIcon={<PlusIcon />}>
              {t("ui.badges.primary")}
            </Badge>
            <Badge variant="solid" color="success" endIcon={<PlusIcon />}>
              {t("ui.badges.success")}
            </Badge>{" "}
            <Badge variant="solid" color="error" endIcon={<PlusIcon />}>
              {t("ui.badges.danger")}
            </Badge>{" "}
            <Badge variant="solid" color="warning" endIcon={<PlusIcon />}>
              {t("ui.badges.warning")}
            </Badge>{" "}
            <Badge variant="solid" color="info" endIcon={<PlusIcon />}>
              {t("ui.badges.info")}
            </Badge>
            <Badge variant="solid" color="light" endIcon={<PlusIcon />}>
              {t("ui.badges.light")}
            </Badge>
            <Badge variant="solid" color="dark" endIcon={<PlusIcon />}>
              {t("ui.badges.dark")}
            </Badge>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
