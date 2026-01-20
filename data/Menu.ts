import { IconType } from 'react-icons';

export interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: IconType;
    items?: MenuItem[];
}

export const MenuData: MenuItem[] = [
    { 
      title: "Alqı Satqı", 
      url: "#",
      items: [
        {
          title: "Alış",
          url: "#"
        },
        {
          title: "Satış",
          url: "#"
        },
        {
          title: "Kirayə",
          url: "#"
        },
        {
          title: "Günlük",
          url: "#"
        },
      ],
    },
    {
      title: "İpoteka",
      url: "#",
    },
    {
      title: "Agentliklər",
      url: "#",
    },
    {
      title: "Yaşayış Kompleksləri",
      url: "#",
    },    
]