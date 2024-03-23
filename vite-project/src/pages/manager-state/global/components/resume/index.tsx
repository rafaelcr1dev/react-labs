import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

const Resume: React.FC = () => {
  const invoices = [
    {
      invoice: "Shipping",
      totalAmount: "$0,00",
    },
    {
      invoice: "Discount",
      totalAmount: "-$0,00",
    },
  ];

  return (
    <section className="w-1/4">
      <h2 className="mb-4 scroll-m-20 text-2xl font-semibold tracking-tight">
        Resume
      </h2>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium" colSpan={3}>
                {invoice.invoice}
              </TableCell>
              <TableCell colSpan={3} className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              <strong>$2,500.00</strong>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <Button size="lg" className="w-full mt-4">
        Go to checkout
      </Button>
    </section>
  );
};

export default Resume;
