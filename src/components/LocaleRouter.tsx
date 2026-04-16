import { useEffect } from "react";
import { useParams, useLocation, useNavigate, Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import { languages, LanguageCode } from "../i18n";
import { pageSlugs, PageSlugKey, getPageSlug } from "../i18n/page-slugs";

const validLocales: string[] = languages.map((l) => l.code) as string[];

function normalizeBrowserLocale(browserLocale: string): string {
  if (browserLocale.startsWith("pt")) return "pt";
  if (browserLocale.startsWith("es")) return "es";
  if (browserLocale.startsWith("en")) return "en";
  return "en";
}

function findPageFromSlug(slug: string): PageSlugKey | null {
  for (const [pageKey, slugs] of Object.entries(pageSlugs)) {
    const locale = validLocales.find(l => slugs[l as keyof typeof slugs] === slug);
    if (locale) return pageKey as PageSlugKey;
  }
  return null;
}

export function LocaleLayout() {
  const { locale, slug } = useParams<{ locale?: string; slug?: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const defaultLocale = "en";

    if (!locale || !validLocales.includes(locale)) {
      const storedLocale = localStorage.getItem("i18nextLng");
      const browserLocale = navigator.language;
      let detectedLocale = defaultLocale;

      if (storedLocale && validLocales.includes(storedLocale)) {
        detectedLocale = storedLocale;
      } else {
        detectedLocale = normalizeBrowserLocale(browserLocale);
      }

      const pathWithoutLocale = "/" + location.pathname.split("/").filter(Boolean).slice(1).join("/") || "/";
      navigate(`/${detectedLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`, { replace: true });
    } else if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n, location.pathname, navigate]);

  useEffect(() => {
    if (locale && locale !== i18n.language) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  useEffect(() => {
    if (locale && !slug) {
      const dashboardSlug = getPageSlug("dashboard", locale);
      navigate(`/${locale}/${dashboardSlug}`, { replace: true });
    }
  }, [locale, slug, navigate]);

  return <Outlet />;
}

export function getLocaleFromPath(pathname: string): LanguageCode | null {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && validLocales.includes(firstSegment)) {
    return firstSegment as LanguageCode;
  }
  return null;
}

export function removeLocaleFromPath(pathname: string): string {
  const locale = getLocaleFromPath(pathname);
  if (locale) {
    return "/" + pathname.split("/").filter(Boolean).slice(1).join("/");
  }
  return pathname;
}

export function getCurrentPageFromPath(pathname: string): PageSlugKey | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length < 2) return null;
  return findPageFromSlug(segments[1]);
}
