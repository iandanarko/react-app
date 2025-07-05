import { revenue, invoices, latestInvoices, customers, invoicesTable } from "./placeholder-data";

export async function fetchRevenue() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return revenue;
}

export async function fetchLatestInvoices() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  return latestInvoices;
}

export async function fetchTotalPaidInvoices() {
  let count = 0
  invoices.forEach((i) => {
    if (i.status == 'paid') {
      count += i.amount
    }
  });
  return "$" + count.toString();
}

export async function fetchTotalPendingInvoices() {
  let count = 0
  invoices.forEach((i) => {
    if (i.status == 'pending') {
      count += i.amount
    }
  });
  return "$" + count.toString();
}

export async function fetchCustomerCount() {
  return customers.length;
}

export async function fetchInvoicesCount() {
  return invoices.length;
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const invoices = invoicesTable
  if (query.length != 0 && currentPage != 0) {
    invoices.filter(i => i.name == query)
  }
  return invoices;
}

export async function fetchInvoicesPages(query: string) {
  return Number(query) || 2;
}
