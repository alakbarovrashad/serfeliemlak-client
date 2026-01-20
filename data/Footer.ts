type FooterMenu = {
    title: string;
    menu: SubMenu[];
};

type SubMenu = {
    item: string;
    url: string;
};

export const FooterMenuData:FooterMenu[] = [
    {
        title: "Resources",
        menu: [
            {
                item: "Alqı-satqı",
                url: "/"
            },
            {
                item: "Kirayə",
                url: "/"
            },
            {
                item: "Günlük",
                url: "/"
            },
            {
                item: "Yaşayış Kompleksləri",
                url: "/"
            },
            {
                item: "İpoteka",
                url: "/"
            },
            {
                item: "Agentliklər",
                url: "/"
            },
        ]
    },
    {
        title: "Help and Support",
        menu: [
            {
                item: "Support",
                url: "/"
            },
            {
                item: "Affiliation Program",
                url: "/"
            },
            {
                item: "FAQs",
                url: "/"
            },
            {
                item: "Discord Community",
                url: "/"
            },
            {
                item: "Blog",
                url: "/"
            },
            {
                item: "About Us",
                url: "/"
            },
            {
                item: "Contact Us",
                url: "/"
            },
            {
                item: "Hire Us",
                url: "/"
            },
        ]
    },
    {
        title: "Legal",
        menu: [
            {
                item: "License",
                url: "/"
            },
            {
                item: "Privacy policy",
                url: "/"
            },
            {
                item: "Terms & Condition",
                url: "/"
            },
            {
                item: "Brand Guideline",
                url: "/"
            },
        ]
    },
]