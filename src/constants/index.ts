
//side bar array 
export const sidebar = [
    {
        id: 1,
        title: 'Main',
        tabs: [
            {
                
                name: 'Home',
                icon : '/public/home.svg',
                path : '/',
            },
            {
                name: 'Profile',
                icon : '/public/profile.svg',
                path: '/profile',
            },
        ],
    },
    {
        id: 2,
        title: 'Lists',
        tabs: [
            {
                name: "Users",
                path: "/users",
                icon: "/public/user.svg",
            },
            {
                name: "Products",
                path: "/products",
                icon: "/public/product.svg",
            },
            {
                name: "Orders",
                path: "/orders",
                icon: "/public/order.svg",
            },
            {
                name: "Posts",
                path: "/posts",
                icon: "/public/post2.svg",
            },
        ],
    },
    {
        id: 3,
        title: 'general',
        tabs: [
            {
                name: "Elements",
                path: "/",
                icon: "/public/element.svg",
            },
            {
                name: "Notes",
                path: "/",
                icon: "/public/note.svg",
            },
            {
                name: "Forms",
                path: "/",
                icon: "/public/form.svg",
            },
            {
                name: "Calendar",
                path: "/",
                icon: "/public/calendar.svg",
            },
        ],
    },
    {
        id: 4,
        title: 'Maintenance',
        tabs: [
            {
                name: "Settings",
                path: "/",
                icon: "/public/setting.svg",
            },
            {
                name: "Backups",
                path: "/",
                icon: "/public/backup.svg",
            },
        ],
    },
    {
        id: 5,
        title: 'analytics',
        tabs: [
            {
                name: "Charts",
                path: "/",
                icon: "/public/chart.svg",
            },
            {
                name: "Logs",
                path: "/",
                icon: "/public/log.svg",
            },
        ],
    },
    
];