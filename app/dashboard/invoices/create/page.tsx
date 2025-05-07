import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { InvoiceForm } from '@/app/lib/definitions';

export default async function Page() {
  const customers = await fetchCustomers();
  const emptyInvoice: InvoiceForm = {
    id: '',
    customer_id: '',
    amount: 0,
    status: 'pending'
  };

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form invoice={emptyInvoice} customers={customers} />
    </main>
  );
}