const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const latestInvoices = [
  {
    id: "1",
    name: customers[0].name,
    image_url: customers[0].image_url,
    email: customers[0].email,
    amount: invoices[0].amount.toString()
  },
  {
    id: "2",
    name: customers[1].name,
    image_url: customers[1].image_url,
    email: customers[1].email,
    amount: invoices[1].amount.toString()
  },
   {
    id: "3",
    name: customers[4].name,
    image_url: customers[4].image_url,
    email: customers[4].email,
    amount: invoices[2].amount.toString()
  },
  {
    id: "4",
    name: customers[3].name,
    image_url: customers[3].image_url,
    email: customers[3].email,
    amount: invoices[3].amount.toString()
  },
  {
    id: "5",
    name: customers[5].name,
    image_url: customers[5].image_url,
    email: customers[5].email,
    amount: invoices[4].amount.toString()
  }
]

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const invoicesTable = [
  {
    id: "1",
    customer_id: customers[0].id,
    name: customers[0].name,
    image_url: customers[0].image_url,
    email: customers[0].email,
    amount: invoices[0].amount,
    date: invoices[0].date,
    status: invoices[0].status
  },
  {
    id: "2",
    customer_id: customers[1].id,
    name: customers[1].name,
    image_url: customers[1].image_url,
    email: customers[1].email,
    amount: invoices[1].amount,
    date: invoices[1].date,
    status: invoices[1].status
  },
   {
    id: "3",
    customer_id: customers[4].id,
    name: customers[4].name,
    image_url: customers[4].image_url,
    email: customers[4].email,
    amount: invoices[2].amount,
    date: invoices[2].date,
    status: invoices[2].status
  },
  {
    id: "4",
    customer_id: customers[3].id,
    name: customers[3].name,
    image_url: customers[3].image_url,
    email: customers[3].email,
    amount: invoices[3].amount,
    date: invoices[3].date,
    status: invoices[3].status
  },
  {
    id: "5",
    customer_id: customers[5].id,
    name: customers[5].name,
    image_url: customers[5].image_url,
    email: customers[5].email,
    amount: invoices[4].amount,
    date: invoices[4].date,
    status: invoices[4].status
  }
]

export { users, customers, invoices, revenue, latestInvoices, invoicesTable };
