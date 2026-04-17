import { useAuthStore } from '@/store/auth.store';

export type PlanType = 'free' | 'pro' | 'enterprise';
export type FeatureFlag = 'ai' | 'integrations' | 'unlimited_projects' | 'audit' | 'tasks';

const FREE_FEATURES: FeatureFlag[] = ['audit', 'tasks'];

export function usePlan() {
  const user = useAuthStore((s) => s.user);
  const plan: PlanType = (user as unknown as { tenant?: { plan: PlanType } } | null)?.tenant?.plan ?? 'free';

  return {
    plan,
    isPro: plan === 'pro' || plan === 'enterprise',
    isFree: plan === 'free',
    isEnterprise: plan === 'enterprise',
    canUse: (feature: FeatureFlag): boolean => {
      if (plan === 'pro' || plan === 'enterprise') return true;
      return FREE_FEATURES.includes(feature);
    },
  };
}
