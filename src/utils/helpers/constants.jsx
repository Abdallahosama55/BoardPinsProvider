import avater from "../../assets/icons/Ellipse 232.png";
import kanbanIcon from "../../assets/icons/kanban.svg";
import tableIcon from "../../assets/icons/table.svg";
import listIcon from "../../assets/icons/list.svg";
import calendarIcon from "../../assets/icons/clender.svg";

export const initialTodoItems = [
  {
    id: 1,
    title: "Go for a walk",
    decribtion: "Create Board Pins UI",
    priority: "MEDIUM",

    precentage: 75,
  },
  {
    id: 2,
    title: "Take a nap",
    decribtion: "Create Board Pins UI",
    priority: "High",
    precentage: 25,
  },
  {
    id: 3,
    title: "Read a book",
    decribtion: "Create Board Pins UI",
    priority: "Low",
    precentage: 60,
  },
  {
    id: 4,
    title: "Work out",
    decribtion: "Create Board Pins UI",
    priority: "Low",
    precentage: 70,
  },
  {
    id: 5,
    title: "Learn something new",
    decribtion: "Create Board Pins UI",
    priority: "High",
    precentage: 80,
  },
];

export const initialdoingItems = [
  {
    id: 99,
    title: "Create Board Pins UI",
    decribtion: "Create Board Pins UI",
    priority: "MEDIUM",

    precentage: 100,
  },
  {
    id: 100,
    title: "Create Board Pins UI",
    decribtion: "Create Board Pins UI",
    priority: "MEDIUM",
    precentage: 10,
  },
];
export const initialdoneItems = [
  {
    id: 9,
    title: "Create Board Pins UI",
    decribtion: "Create Board Pins UI",
    priority: "MEDIUM",

    precentage: 100,
  },
  {
    id: 10,
    title: "Create Board Pins UI",
    decribtion: "Create Board Pins UI",
    priority: "MEDIUM",
    precentage: 10,
  },
  {
    id: 11,
    title: "Read a book",
    decribtion: "Create Board Pins UI",
    priority: "Low",
    precentage: 15,
  },
  {
    id: 14,
    title: "Work out",
    decribtion: "Create Board Pins UI",
    priority: "Low",
    precentage: 18,
  },
  {
    id: 15,
    title: "Learn something new",
    decribtion: "Create Board Pins UI",
    priority: "Low",
    precentage: 5,
  },
];

export const initialColumnData = {
  todoColumn: {
    id: 1,
    title: "toDo",
    items: [...initialTodoItems],
  },
  doingColumn: {
    id: 2,
    title: "Doing",
    items: [...initialdoingItems],
  },
  doneColumn: {
    id: 3,
    title: "done",
    items: [...initialdoneItems],
  },
};
export const data = [
  {
    taskName: "Task One",
    assignee: avater,
    StartDate: "05/01/2023",
    dueDate: "05/01/2023",
    status: "Doing",
    Priority: "MEDIUM",
    id: "1",
  },
  {
    taskName: "Task Two",
    assignee: avater,
    dueDate: "05/02/2023",
    StartDate: "05/01/2023",
    Priority: "HIGH",
    status: "To Do",
    id: "2",
  },
  {
    taskName: "Task Three",
    assignee: avater,
    StartDate: "05/01/2023",
    dueDate: "05/01/2023",
    status: "Doing",
    Priority: "low",
    id: "3",
  },
  {
    taskName: "Task Four",
    assignee: avater,
    StartDate: "05/01/2023",
    dueDate: "05/02/2023",
    status: "To Do",
    Priority: "HIGH",
    id: "4",
  },
  {
    taskName: "Task Five",
    assignee: avater,
    StartDate: "05/01/2023",
    dueDate: "05/01/2023",
    status: "Done",
    Priority: "low",
    id: "5",
  },
  {
    taskName: "Task Six",
    assignee: avater,
    StartDate: "05/01/2023",
    dueDate: "05/02/2023",
    status: "To Do",
    Priority: "HIGH",
    id: "6",
  },
  // Add more tasks as needed
];

export const views = [
  { key: "kanban", label: "Kanban", icon: kanbanIcon },
  { key: "list", label: "List", icon: listIcon },
  { key: "table", label: "Table", icon: tableIcon },
  { key: "calendar", label: "Calendar", icon: calendarIcon },
];

export const viewsSetting = [
  { key: "overview", label: "overview" },
  { key: "About", label: "About" },
  { key: "Services", label: "Services" },
  { key: "Photos", label: "Photos" },
  { key: "Documents", label: "Documents" },
];
export const projects = [
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Approved",
  },
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Approved",
  },
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Rejected",
  },
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Pending",
  },
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Rejected",
  },
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Rejected",
  },
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Pending",
  },
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Approved",
  },
];
export const Savedprojects = [
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Approved",
  },
  {
    title: "Web Development Project",
    person: "kirolos A...",
    applied: 3,
    timeAgo: "2 hours ago",
    price: "200 - 300 Egp",
    status: "Approved",
  },

];


export const cardDataGroupProduction = [
  {
    target: { current: 500, total: 1000 },
    merchantsApply: 3,
    category: "Footwear",
    merchants: [
      {
        name: "Merchant name",
        applyFor: 300,
        imgSrc: "https://via.placeholder.com/100",
      },
      {
        name: "Merchant name",
        applyFor: 300,
        imgSrc: "https://via.placeholder.com/100",
      },
      {
        name: "Merchant name",
        applyFor: 300,
        imgSrc: "https://via.placeholder.com/100",
      },
    ],
    showMoreText: "Show 3 Merchants",
    updatedInfo: "5 Merchants | Updated on 1/2/2024",
    Status: "Waiting",
    groupName: "Merchant Name",
  },
  {
    target: { current: 900, total: 5000 },
    merchantsApply: 12,
    category: "manwear",
    merchants: [
      {
        name: "Merchant name",
        applyFor: 900,
        imgSrc: "https://via.placeholder.com/100",
      },
      {
        name: "Merchant name",
        applyFor: 1200,
        imgSrc: "https://via.placeholder.com/100",
      },
      {
        name: "Merchant name",
        applyFor: 900,
        imgSrc: "https://via.placeholder.com/100",
      },
    ],
    showMoreText: "Show 3 Merchants",
    updatedInfo: "3 Merchants | Updated on 1/2/2024",
    Status: "Ready to start",
    groupName: "Merchant Name",
  },
];




  // Define plans with both English and Arabic content
  export const plans = {
    en: {
      Business: {
        Free: [
          {
            title: "Free",
            monthlyPrice: "EGP 0",
            annualPrice: "EGP 0",
            buttonText: "Start Now",
            listItems: [
              "Get a basic listing in the directory to showcase your skills and experience to potential clients.",
              "Receive a limited number of connection requests: Get discovered by high-growth e-commerce businesses. 5 connections only (To be editable)",
              "Freemium Project Management: Collaborate with connected merchants on basic project tasks ( Limited to one project)",
            ],
            borderColor: "#1E1E1E",
            buttonBgColor: "transparent",
            buttonTextColor: "#6161FF",
          },
        ],
        Standard: [
          {
            title: "Pro Plan",
            monthlyPrice: "EGP 299",
            annualPrice: "EGP 2999",
            buttonText: "Subscribe Now",
            listItems: [
              "Everything in the Free Plan",
              "Stand Out from the Crowd",
              "Unlimited Connection Requests",
              "Create Pins Collection",
              "Lead Generation Machine",
              "Basic reporting and analytics",
              "Get featured in our weekly client spotlight newsletter (limited slots available!).",
            ],
            borderColor: "#6161FF",
            buttonBgColor: "#6161FF",
            buttonTextColor: "#F5F6FA",
            viewBadge: true,
          },
        ],
        Premium: [
          {
            title: "Enterprise Plan",
            monthlyPrice: "EGP 399",
            annualPrice: "EGP 3999",
            buttonText: "Start Now",
            listItems: [
              "Everything in the Pro Plan",
              "Dominate Directory Searches",
              "Your Personal Growth Partner",
            ],
            borderColor: "#1E1E1E",
            buttonBgColor: "transparent",
            buttonTextColor: "#6161FF",
          },
        ],
      },
      Influencer: {
        Free: [
          {
            title: "Free",
            monthlyPrice: "EGP 0",
            annualPrice: "EGP 0",
            buttonText: "Start Now",
            listItems: [
              "Showcase your talents and experience to potential clients.",
              "Receive a limited number of connection requests: Get discovered by high-growth e-commerce businesses. 5 connections only (To be editable)",
              "Freemium Project Management: Collaborate with connected merchants on basic project tasks ( Limited to one project)",
            ],
            borderColor: "#1E1E1E",
            buttonBgColor: "transparent",
            buttonTextColor: "#6161FF",
          },
        ],
        Standard: [
          {
            title: "Pro Plan",
            monthlyPrice: "EGP 299",
            annualPrice: "EGP 2999",
            buttonText: "Subscribe Now",
            listItems: [
              "Everything in the Free Plan",
              "Stand Out from the Crowd",
              "Unlimited Connection Requests",
              "Create Content Collections",
              "Lead Generation Machine",
              "Basic reporting and analytics",
              "Get featured in our weekly client spotlight newsletter (limited slots available!).",
            ],
            borderColor: "#6161FF",
            buttonBgColor: "#6161FF",
            buttonTextColor: "#F5F6FA",
            viewBadge: true,
          },
        ],
        Premium: [
          {
            title: "Enterprise Plan",
            monthlyPrice: "EGP 399",
            annualPrice: "EGP 3999",
            buttonText: "Start Now",
            listItems: [
              "Everything in the Pro Plan",
              "Dominate Directory Searches",
              "Your Personal Growth Partner",
            ],
            borderColor: "#1E1E1E",
            buttonBgColor: "transparent",
            buttonTextColor: "#6161FF",
          },
        ],
      },
    },
    ar: {
      Business: {
        Free: [
          {
            title: "مجاني",
            monthlyPrice: "EGP 0",
            annualPrice: "EGP 0",
            buttonText: "ابدأ الآن",
            listItems: [
              "احصل على إدراج أساسي في الدليل لعرض مهاراتك وتجربتك للعملاء المحتملين.",
              "تلقي عدد محدود من طلبات الاتصال: اكتشافك من قبل الشركات الناشئة في التجارة الإلكترونية. 5 اتصالات فقط (قابلة للتعديل)",
              "إدارة المشاريع المجانية: التعاون مع التجار المتصلين في المهام الأساسية للمشروع (محدود بمشروع واحد)",
            ],
            borderColor: "#1E1E1E",
            buttonBgColor: "transparent",
            buttonTextColor: "#6161FF",
          },
        ],
        Standard: [
          {
            title: "باقة الإحترافيه",
            monthlyPrice: "EGP 299",
            annualPrice: "EGP 2999",
            buttonText: "اشترك الآن",
            listItems: [
              "كل شيء في خطة مجانية",
              "تمييزك عن الآخرين",
              "طلبات اتصال غير محدودة",
              "إنشاء مجموعات الدبابيس",
              "آلة توليد العملاء المحتملين",
              "التقارير والتحليلات الأساسية",
              "الظهور في نشرتنا الأسبوعية للعملاء (المقاعد محدودة!)",
            ],
            borderColor: "#6161FF",
            buttonBgColor: "#6161FF",
            buttonTextColor: "#F5F6FA",
            viewBadge: true,
          },
        ],
        Premium: [
          {
            title: "باقة المؤسسة",
            monthlyPrice: "EGP 399",
            annualPrice: "EGP 3999",
            buttonText: "ابدأ الآن",
            listItems: [
              "كل شيء في خطة برو",
              "السيطرة على عمليات البحث في الدليل",
              "شريك نموك الشخصي",
            ],
            borderColor: "#1E1E1E",
            buttonBgColor: "transparent",
            buttonTextColor: "#6161FF",
          },
        ],
      },
      Influencer: {
        Free: [
          {
            title: "مجاني",
            monthlyPrice: "EGP 0",
            annualPrice: "EGP 0",
            buttonText: "ابدأ الآن",
            listItems: [
              "عرض مواهبك وتجربتك للعملاء المحتملين.",
              "تلقي عدد محدود من طلبات الاتصال: اكتشافك من قبل الشركات الناشئة في التجارة الإلكترونية. 5 اتصالات فقط (قابلة للتعديل)",
              "إدارة المشاريع المجانية: التعاون مع التجار المتصلين في المهام الأساسية للمشروع (محدود بمشروع واحد)",
            ],
            borderColor: "#1E1E1E",
            buttonBgColor: "transparent",
            buttonTextColor: "#6161FF",
          },
        ],
        Standard: [
          {
            title: "الباقة الإحترافيه",
            monthlyPrice: "EGP 299",
            annualPrice: "EGP 2999",
            buttonText: "اشترك الآن",
            listItems: [
              "كل شيء في خطة مجانية",
              "تمييزك عن الآخرين",
              "طلبات اتصال غير محدودة",
              "إنشاء مجموعات المحتوى",
              "آلة توليد العملاء المحتملين",
              "التقارير والتحليلات الأساسية",
              "الظهور في نشرتنا الأسبوعية للعملاء (المقاعد محدودة!)",
            ],
            borderColor: "#6161FF",
            buttonBgColor: "#6161FF",
            buttonTextColor: "#F5F6FA",
            viewBadge: true,
          },
        ],
        Premium: [
          {
            title: "باقة المؤسسة",
            monthlyPrice: "EGP 399",
            annualPrice: "EGP 3999",
            buttonText: "ابدأ الآن",
            listItems: [
              "كل شيء في خطة برو",
              "السيطرة على عمليات البحث في الدليل",
              "شريك نموك الشخصي",
            ],
            borderColor: "#1E1E1E",
            buttonBgColor: "transparent",
            buttonTextColor: "#6161FF",
          },
        ],
      },
    },
  };