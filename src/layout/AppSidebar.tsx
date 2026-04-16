import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { Link, useLocation, useParams } from "react-router";
import { useTranslation } from "react-i18next";

import {
  BoxCubeIcon,
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
} from "../icons";
import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";
import { languages } from "../i18n";
import { getPath } from "../i18n/page-slugs";

export type NavSubItem = {
  name: string;
  path: string;
  pro?: boolean;
  new?: boolean;
};

export type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: NavSubItem[];
};

const AppSidebar: React.FC = () => {
  const { t } = useTranslation();
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const { locale } = useParams<{ locale?: string }>();

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const currentLocale = useMemo(() => {
    if (locale && languages.some((l) => l.code === locale)) {
      return locale;
    }
    return "en";
  }, [locale]);

  const localePath = `/${currentLocale}`;

  const mainNavItems: NavItem[] = useMemo(() => [
    {
      icon: <GridIcon />,
      name: t("menu.dashboard"),
      subItems: [
        { name: t("menu.dashboard"), path: getPath("dashboard", currentLocale) },
        { name: t("menu.analytics"), path: getPath("analytics", currentLocale) },
        { name: t("menu.marketing"), path: getPath("marketing", currentLocale) },
        { name: t("menu.crm"), path: getPath("crm", currentLocale) },
        { name: t("menu.stocks"), path: getPath("stocks", currentLocale) },
        { name: t("menu.saas"), path: getPath("saas", currentLocale) },
        { name: t("menu.logistics"), path: getPath("logistics", currentLocale) },
      ],
    },
    {
      icon: <GridIcon />,
      name: t("menu.ecommerce"),
      subItems: [
        { name: t("menu.products"), path: getPath("products", currentLocale) },
        { name: t("menu.addProduct"), path: getPath("add-product", currentLocale) },
        { name: t("menu.billing"), path: getPath("billing", currentLocale) },
        { name: t("menu.invoices"), path: getPath("invoices", currentLocale) },
        { name: t("menu.createInvoice"), path: getPath("create-invoice", currentLocale) },
        { name: t("menu.transactions"), path: getPath("transactions", currentLocale) },
      ],
    },
    {
      icon: <CalenderIcon />,
      name: t("menu.calendar"),
      path: getPath("calendar", currentLocale),
    },
    {
      icon: <UserCircleIcon />,
      name: t("menu.userProfile"),
      path: getPath("profile", currentLocale),
    },
    {
      name: t("menu.forms"),
      icon: <ListIcon />,
      subItems: [
        { name: t("menu.formElements"), path: getPath("form-elements", currentLocale) },
      ],
    },
    {
      name: t("menu.tables"),
      icon: <TableIcon />,
      subItems: [
        { name: t("menu.basicTables"), path: getPath("basic-tables", currentLocale) },
      ],
    },
    {
      name: t("menu.pages"),
      icon: <PageIcon />,
      subItems: [
        { name: t("menu.blankPage"), path: getPath("blank", currentLocale) },
        { name: t("menu.error404"), path: getPath("notfound", currentLocale) },
      ],
    },
  ], [t, currentLocale]);

  const othersNavItems: NavItem[] = useMemo(() => [
    {
      icon: <PieChartIcon />,
      name: t("menu.charts"),
      subItems: [
        { name: t("menu.lineChart"), path: getPath("line-chart", currentLocale) },
        { name: t("menu.barChart"), path: getPath("bar-chart", currentLocale) },
      ],
    },
    {
      icon: <BoxCubeIcon />,
      name: t("menu.uiElements"),
      subItems: [
        { name: t("menu.alerts"), path: getPath("alerts", currentLocale) },
        { name: t("menu.avatar"), path: getPath("avatars", currentLocale) },
        { name: t("menu.badge"), path: getPath("badge", currentLocale) },
        { name: t("menu.buttons"), path: getPath("buttons", currentLocale) },
        { name: t("menu.images"), path: getPath("images", currentLocale) },
        { name: t("menu.videos"), path: getPath("videos", currentLocale) },
      ],
    },
    {
      icon: <PlugInIcon />,
      name: t("menu.authentication"),
      subItems: [
        { name: t("menu.signIn"), path: getPath("signin", currentLocale) },
        { name: t("menu.signUp"), path: getPath("signup", currentLocale) },
      ],
    },
  ], [t, currentLocale]);

  const isActive = useCallback(
    (path: string) => {
      const normalizePath = (p: string) => p.replace(/\/$/, "").replace(/^\/(en|pt|es)\//, "/");
      const currentPath = normalizePath(location.pathname);
      const targetPath = normalizePath(path);
      return currentPath === targetPath;
    },
    [location.pathname]
  );

  useEffect(() => {
    let submenuMatched = false;
    [mainNavItems, othersNavItems].forEach((items) => {
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({ type: items === mainNavItems ? "main" : "others", index });
              submenuMatched = true;
            }
          });
        } else if (nav.path && isActive(nav.path)) {
          submenuMatched = true;
        }
      });
    });
    if (!submenuMatched) setOpenSubmenu(null);
  }, [location.pathname, isActive, mainNavItems, othersNavItems, currentLocale]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prev) =>
      prev?.type === menuType && prev?.index === index ? null : { type: menuType, index }
    );
  };

  const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group cursor-pointer ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}
            >
              <span className={`menu-item-icon-size ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-icon-active"
                  : "menu-item-icon-inactive"
              }`}>
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <>
                  <span className="menu-item-text">{nav.name}</span>
                  <ChevronDownIcon className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType && openSubmenu?.index === index ? "rotate-180 text-brand-500" : ""
                  }`} />
                </>
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"}`}
              >
                <span className={`menu-item-icon-size ${
                  isActive(nav.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"
                }`}>
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => { subMenuRefs.current[`${menuType}-${index}`] = el; }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height: openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? `${subMenuHeight[`${menuType}-${index}`]}px` : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      to={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path) ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span className={`ml-auto menu-dropdown-badge ${
                            isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"
                          }`}>new</span>
                        )}
                        {subItem.pro && (
                          <span className={`ml-auto menu-dropdown-badge ${
                            isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"
                          }`}>pro</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-boxdark dark:border-strokedark text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 ${
        isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"
      } ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
        <Link to={localePath}>
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img className="dark:hidden" src="/images/logo/logo.svg" alt="Logo" width={150} height={40} />
              <img className="hidden dark:block" src="/images/logo/logo-dark.svg" alt="Logo" width={150} height={40} />
            </>
          ) : (
            <img src="/images/logo/logo-icon.svg" alt="Logo" width={32} height={32} />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
              }`}>
                {isExpanded || isHovered || isMobileOpen ? t("sidebar.menu") : <HorizontaLDots className="size-6" />}
              </h2>
              {renderMenuItems(mainNavItems, "main")}
            </div>
            <div>
              <h2 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
              }`}>
                {isExpanded || isHovered || isMobileOpen ? t("sidebar.others") : <HorizontaLDots />}
              </h2>
              {renderMenuItems(othersNavItems, "others")}
            </div>
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
