export type Minstamp = number;
export type SerializableInvoice = {
  version: "1";
  title: string;
  recipient: {
    name: string;
    isIndividual: boolean;
  };
  date: Minstamp;
  sender: {
    postNumber: string;
    address: string;
    name: string;
  };
  payTo: {
    due: Minstamp;
    bank: string;
  };
  /**
   * if true, VAT is calculated independently of the amount and included VAT is displayed
   * if false, it is assumed that the item.price is already VAT-included
   */
  includeVat: boolean;
  vatRate: number;
  items: {
    topic: string;
    price: number;
    amount: number;
  }[];
  memo: string;
};
