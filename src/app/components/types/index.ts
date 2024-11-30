export type ButtonPrimaryProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export type MenuItemProps = {
  label: string;
  isActive: boolean;
};
export type FooterMenuItemProps = {
  label: string;
  fontSize: number;
  fontWeight: string;
  color: string;
};

export type FooterIconProps = {
  image: string;
  link: string;
  key?: string;
};

export type TitleTextProps = {
  label: string;
  color: string;
  fontWeight: string;
  size: number;
  style?: object;
  className?: string;
};

export interface MenuItemInterface {
  label: string;
  key: string;
  color?: string;
  fontSize?: number;
  fontWeigth?: string;
}

export type FooterMenuProps = {
  items: MenuItemInterface[];
};

export type FooterIconsMenuProps = {
  items: FooterIconProps[];
};

export type CardLearnerProps = {
  name: string;
  text: string;
  relationship: string;
  avatar: string;
  img: string;
};

export type SvgProps = React.SVGProps<SVGSVGElement>;
export type ParagraphTextProps = {
  children: React.ReactNode;
  className: string;
};
