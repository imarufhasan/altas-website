// FILE PATH: components/Icon.tsx

import {
  Landmark,
  Clock,
  TriangleAlert,
  BadgeCheck,
  ClipboardCheck,
  Settings,
  ChartBarBig,
  CornerUpRight,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";

import type { IconName } from "@/lib/api";

// Re-export so pages/components can use:
// import Icon, { type IconName } from "@/components/Icon";
export type { IconName } from "@/lib/api";

const ICON_MAP: Record<
  IconName,
  React.ComponentType<LucideProps>
> = {
  landmark: Landmark,
  clock: Clock,
  "triangle-alert": TriangleAlert,
  "badge-check": BadgeCheck,
  "clipboard-check": ClipboardCheck,
  settings: Settings,
  "chart-square": ChartBarBig,
  "route-square": CornerUpRight,
  "shield-check": ShieldCheck,
};

type IconProps = {
  name: IconName;
} & LucideProps;

export default function Icon({ name, ...props }: IconProps) {
  const Cmp = ICON_MAP[name];

  return <Cmp {...props} />;
}