import avater from "../../assets/icons/Ellipse 232.png"
import kanbanIcon from '../../assets/icons/kanban.svg';
import tableIcon from '../../assets/icons/table.svg';
import listIcon from '../../assets/icons/list.svg';
import calendarIcon from '../../assets/icons/clender.svg';

export const initialTodoItems = [
  {
    id: 1,
    title: "Go for a walk",
    decribtion:"Create Board Pins UI",
    priority:'MEDIUM',

    precentage:75,
  },
  {
    id: 2,
    title: "Take a nap",
    decribtion:"Create Board Pins UI",
    priority:'High',
    precentage:25,
  },
  {
    id: 3,
    title: "Read a book",
    decribtion:"Create Board Pins UI",
    priority:'Low',
    precentage:60,
  },
  {
    id: 4,
    title: "Work out",
    decribtion:"Create Board Pins UI",
    priority:'Low',
    precentage:70,

  },
  {
    id: 5,
    title: "Learn something new",
    decribtion:"Create Board Pins UI",
    priority:'High',
    precentage:80,
  },
];

export const initialdoingItems = [
  {
    id: 99,
    title: "Create Board Pins UI",
    decribtion:"Create Board Pins UI",
    priority:'MEDIUM',
    
    precentage:100,
  },
  {
    id: 100,
    title: "Create Board Pins UI",
    decribtion:"Create Board Pins UI",
    priority:'MEDIUM',
    precentage:10,
  },

];
export const initialdoneItems = [
  {
    id: 9,
    title: "Create Board Pins UI",
    decribtion:"Create Board Pins UI",
    priority:'MEDIUM',
    
    precentage:100,
  },
  {
    id: 10,
    title: "Create Board Pins UI",
    decribtion:"Create Board Pins UI",
    priority:'MEDIUM',
    precentage:10,
  },
  {
    id: 11,
    title: "Read a book",
    decribtion:"Create Board Pins UI",
    priority:'Low',
    precentage:15,
  },
  {
    id: 14,
    title: "Work out",
    decribtion:"Create Board Pins UI",
    priority:'Low',
    precentage:18,
  },
  {
    id: 15,
    title: "Learn something new",
    decribtion:"Create Board Pins UI",
    priority:'Low',
    precentage:5,
  },
];

export const initialColumnData = {
  todoColumn: {
    id: 1,
    title: "To do",
    items: [...initialTodoItems],
  },
  doingColumn: {
    id: 2,
    title: "Doing",
    items: [...initialdoingItems],
  },
  doneColumn: {
    id: 3,
    title: "Done",
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
  { key: 'kanban', label: 'Kanban', icon: kanbanIcon },
  { key: 'list', label: 'List', icon: listIcon },
  { key: 'table', label: 'Table', icon: tableIcon },
  { key: 'calendar', label: 'Calendar', icon: calendarIcon },
];

