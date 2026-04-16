import { useTranslation } from "react-i18next";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { BoxIcon } from "../../icons";

export default function Buttons() {
  const { t } = useTranslation();

  return (
    <div>
      <PageMeta
        title={t("pages.buttons.title")}
        description={t("pages.buttons.description")}
      />
      <PageBreadcrumb pageTitle={t("pages.buttons.title")} />
      <div className="space-y-5 sm:space-y-6">
        {/* Primary Button */}
        <ComponentCard title={t("ui.buttons.primary")}>
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              {t("ui.buttons.primary")}
            </Button>
            <Button size="md" variant="primary">
              {t("ui.buttons.primary")}
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title={`${t("ui.buttons.primary")} ${t("ui.buttons.withLeftIcon")}`}>
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
            >
              {t("ui.buttons.primary")}
            </Button>
            <Button
              size="md"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
            >
              {t("ui.buttons.primary")}
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title={`${t("ui.buttons.primary")} ${t("ui.buttons.withRightIcon")}`}>
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              endIcon={<BoxIcon className="size-5" />}
            >
              {t("ui.buttons.primary")}
            </Button>
            <Button
              size="md"
              variant="primary"
              endIcon={<BoxIcon className="size-5" />}
            >
              {t("ui.buttons.primary")}
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button */}
        <ComponentCard title={t("ui.buttons.secondary")}>
          <div className="flex items-center gap-5">
            {/* Outline Button */}
            <Button size="sm" variant="outline">
              {t("ui.buttons.outline")}
            </Button>
            <Button size="md" variant="outline">
              {t("ui.buttons.outline")}
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button with Start Icon */}
        <ComponentCard title={`${t("ui.buttons.outline")} ${t("ui.buttons.withLeftIcon")}`}>
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              startIcon={<BoxIcon className="size-5" />}
            >
              {t("ui.buttons.outline")}
            </Button>
            <Button
              size="md"
              variant="outline"
              startIcon={<BoxIcon className="size-5" />}
            >
              {t("ui.buttons.outline")}
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Outline Button with Start Icon */}
        <ComponentCard title={`${t("ui.buttons.outline")} ${t("ui.buttons.withRightIcon")}`}>
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              endIcon={<BoxIcon className="size-5" />}
            >
              {t("ui.buttons.outline")}
            </Button>
            <Button
              size="md"
              variant="outline"
              endIcon={<BoxIcon className="size-5" />}
            >
              {t("ui.buttons.outline")}
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
