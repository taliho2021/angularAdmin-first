export interface SideBarMenuItem {
    id?: number;
    label?: string;
    iconName?: string;
    route?: string;
    subItems?: any;
    isTitle?: boolean;
    parentId?: number;
    isLayout?: boolean;
    children?: SideBarMenuItem[];
}
