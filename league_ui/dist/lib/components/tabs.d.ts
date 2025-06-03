import { type TabListProps, type TabPanelProps, type TabProps } from "react-aria-components";
export type { Key } from "react-aria-components";
export declare const Tabs: (props: import("react-aria-components").TabsProps & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement | null;
export declare function TabList<T extends object>({ className, ...rest }: TabListProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function Tab({ children, className, ...rest }: TabProps): import("react/jsx-runtime").JSX.Element;
export declare function TabPanel({ ...rest }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
