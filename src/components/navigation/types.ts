export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
}

export interface NavigationProps {
  language: string;
}
