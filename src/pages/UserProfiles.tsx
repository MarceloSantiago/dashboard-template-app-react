import { useTranslation } from "react-i18next";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import UserAddressCard from "../components/UserProfile/UserAddressCard";
import PageMeta from "../components/common/PageMeta";

export default function UserProfiles() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("pages.userProfiles.title")}
        description={t("pages.userProfiles.description")}
      />
      <PageBreadcrumb pageTitle={t("pages.userProfiles.title")} />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-strokedark dark:bg-boxdark lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          {t("pages.userProfiles.title")}
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
        </div>
      </div>
    </>
  );
}
