import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { SwiperProps } from "swiper/react";

export interface IChildren {
  children: React.ReactNode;
}

export interface IClassName {
  className?: string;
}

export type TLanguages = "en";

export interface IHeaderLink {
  text: string;
  href: string;
}

export interface IFooterLink {
  text: string;
  href: string;
  isIndependent?: boolean;
}

export interface IProductCard {
  discount?: number;
  images: string[];
  name: string;
  price: number;
  rating: number[];
  ratingAmount: number;
  isFavorite?: boolean;
  isNew?: boolean;
  colors?: string[];
}

export interface ICategoryCard {
  title: string;
  icon: string;
}

export interface IPrimaryButton extends IChildren, IClassName {
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

export interface IBannerButton {
  text: string;
}

export interface IServiceCard {
  image: string;
  title: string;
  subtitle: string;
}

export interface INavigationTrain {
  isNotFound?: boolean;
  isError?: boolean;
}

export interface IInputWithoutLabel {
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export interface IAboutCard {
  title: string;
  i: number;
  subtitle: string;
}

interface IAboutEmplayeeCardHref {
  twitter: string;
  instagram: string;
  linkedin: string;
}
export interface IAboutEmployeeCard {
  image: string;
  name: string;
  status: string;
  href: IAboutEmplayeeCardHref;
}

export interface IArrowButton extends IClassName {
  direction: "left" | "right" | "up";
  isScrolling?: boolean;
}

export interface IBannerContent extends IClassName {
  title: string;
  description: string;
}

type TDirection = "horizontal" | "vertical";
export interface IMainDivider extends IClassName {
  dir: TDirection;
}

export interface IHomeSideBarMenuLink {
  menuName: string;
  menuItems: { href: string; name: string }[];
}

export interface INameAndHref {
  name: string;
  href: string;
}

export interface IProductSwiper {
  swiperProps: SwiperProps;
  data: IProductCard[];
  itemsCentered?: boolean;
}

export type TTime = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export interface ICategorySwiper {
  swiperProps: SwiperProps;
  data: ICategoryCard[];
}

export interface ISectionTitleWithQuadrant extends IClassName {
  text: string;
  withoutQuadrant?: boolean;
}

export interface ITextWithClassName extends IClassName {
  text: string;
}

export interface ICartProductCard extends IProductCard {
  amount: number;
}

export interface IInputWithLabel extends IClassName {
  label: string;
  labelSpan?: string;
  inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error?: string;
}

export interface ICheckoutCard {
  image: string;
  name: string;
  price: number;
}

export type TPrice = {
  subTotal: number;
  deliveryPrice: number;
  total: number;
};

export interface ICredentials {
  firstName: string;
  companyName: string;
  streetAddress: string;
  apartment: string;
  city: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface ILangProps {
  params: { lang: TLanguages };
}

export interface ILangPropsToComponent {
  lang: TLanguages;
}

export interface IDict {
  dict: any;
}
