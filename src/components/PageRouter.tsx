import { useParams } from "react-router";
import Home from "../pages/Dashboard/Home";
import Analytics from "../pages/Dashboard/Analytics";
import Marketing from "../pages/Dashboard/Marketing";
import CRM from "../pages/Dashboard/CRM";
import Stocks from "../pages/Dashboard/Stocks";
import SaaS from "../pages/Dashboard/SaaS";
import Logistics from "../pages/Dashboard/Logistics";
import UserProfiles from "../pages/UserProfiles";
import Calendar from "../pages/Calendar";
import Blank from "../pages/Blank";
import FormElements from "../pages/Forms/FormElements";
import FormLayout from "../pages/Forms/FormLayout";
import BasicTables from "../pages/Tables/BasicTables";
import DataTables from "../pages/DataTables";
import Alerts from "../pages/UiElements/Alerts";
import Avatars from "../pages/UiElements/Avatars";
import Badges from "../pages/UiElements/Badges";
import Breadcrumb from "../pages/UiElements/Breadcrumb";
import Buttons from "../pages/UiElements/Buttons";
import Cards from "../pages/UiElements/Cards";
import Images from "../pages/UiElements/Images";
import Videos from "../pages/UiElements/Videos";
import Modals from "../pages/UiElements/Modals";
import Tabs from "../pages/UiElements/Tabs";
import Pagination from "../pages/UiElements/Pagination";
import Progressbar from "../pages/UiElements/Progressbar";
import LineChart from "../pages/Charts/LineChart";
import BarChart from "../pages/Charts/BarChart";
import PieChart from "../pages/Charts/PieChart";
import SignIn from "../pages/AuthPages/SignIn";
import SignUp from "../pages/AuthPages/SignUp";
import ResetPassword from "../pages/AuthPages/ResetPassword";
import TwoStepVerification from "../pages/AuthPages/TwoStepVerification";
import NotFound from "../pages/OtherPage/NotFound";
import Products from "../pages/Ecommerce/Products";
import AddProduct from "../pages/Ecommerce/AddProduct";
import Billing from "../pages/Ecommerce/Billing";
import Invoices from "../pages/Ecommerce/Invoices";
import CreateInvoice from "../pages/Ecommerce/CreateInvoice";
import Transactions from "../pages/Ecommerce/Transactions";
import { pageSlugs, PageSlugKey } from "../i18n/page-slugs";

type PageEntry = {
  component: React.ComponentType;
  auth?: boolean;
};

type ActivePageKey =
  | 'dashboard' | 'analytics' | 'marketing' | 'crm' | 'stocks' | 'saas' | 'logistics'
  | 'calendar' | 'profile' | 'blank'
  | 'form-elements' | 'form-layout' | 'basic-tables' | 'data-tables'
  | 'alerts' | 'avatars' | 'badge' | 'breadcrumb' | 'buttons' | 'cards' | 'images' | 'videos' | 'modals' | 'tabs' | 'pagination' | 'progressbar'
  | 'line-chart' | 'bar-chart' | 'pie-chart'
  | 'signin' | 'signup' | 'reset-password' | 'two-step-verification' | 'notfound'
  | 'products' | 'add-product' | 'billing' | 'invoices' | 'create-invoice' | 'transactions';

const pageComponents: Record<ActivePageKey, PageEntry> = {
  dashboard: { component: Home },
  analytics: { component: Analytics },
  marketing: { component: Marketing },
  crm: { component: CRM },
  stocks: { component: Stocks },
  saas: { component: SaaS },
  logistics: { component: Logistics },
  calendar: { component: Calendar },
  profile: { component: UserProfiles },
  blank: { component: Blank },
  "form-elements": { component: FormElements },
  "form-layout": { component: FormLayout },
  "basic-tables": { component: BasicTables },
  "data-tables": { component: DataTables },
  alerts: { component: Alerts },
  avatars: { component: Avatars },
  badge: { component: Badges },
  breadcrumb: { component: Breadcrumb },
  buttons: { component: Buttons },
  cards: { component: Cards },
  images: { component: Images },
  videos: { component: Videos },
  modals: { component: Modals },
  tabs: { component: Tabs },
  pagination: { component: Pagination },
  progressbar: { component: Progressbar },
  "line-chart": { component: LineChart },
  "bar-chart": { component: BarChart },
  "pie-chart": { component: PieChart },
  signin: { component: SignIn, auth: true },
  signup: { component: SignUp, auth: true },
  "reset-password": { component: ResetPassword, auth: true },
  "two-step-verification": { component: TwoStepVerification, auth: true },
  notfound: { component: NotFound },
  products: { component: Products },
  "add-product": { component: AddProduct },
  billing: { component: Billing },
  invoices: { component: Invoices },
  "create-invoice": { component: CreateInvoice },
  transactions: { component: Transactions },
};

const activePageKeys: ActivePageKey[] = [
  'dashboard', 'analytics', 'marketing', 'crm', 'stocks', 'saas', 'logistics',
  'calendar', 'profile', 'blank',
  'form-elements', 'form-layout', 'basic-tables', 'data-tables',
  'alerts', 'avatars', 'badge', 'breadcrumb', 'buttons', 'cards', 'images', 'videos', 'modals', 'tabs', 'pagination', 'progressbar',
  'line-chart', 'bar-chart', 'pie-chart',
  'signin', 'signup', 'reset-password', 'two-step-verification', 'notfound',
  'products', 'add-product', 'billing', 'invoices', 'create-invoice', 'transactions'
];

function findPageBySlug(slug: string): ActivePageKey | null {
  for (const [pageKey, slugs] of Object.entries(pageSlugs)) {
    const allSlugs = Object.values(slugs) as string[];
    if (allSlugs.includes(slug)) {
      const key = pageKey as PageSlugKey;
      if (activePageKeys.includes(key as ActivePageKey)) {
        return key as ActivePageKey;
      }
    }
  }
  return null;
}

export function PageRouter() {
  const { slug } = useParams<{ slug?: string }>();

  if (!slug) {
    const entry = pageComponents["dashboard"];
    if (entry) {
      const PageComponent = entry.component;
      return <PageComponent />;
    }
    return null;
  }

  const pageKey = findPageBySlug(slug);

  if (pageKey) {
    const entry = pageComponents[pageKey];
    if (entry) {
      const PageComponent = entry.component;
      return <PageComponent />;
    }
  }

  return null;
}

export function getPageKey(slug: string): ActivePageKey | null {
  return findPageBySlug(slug);
}