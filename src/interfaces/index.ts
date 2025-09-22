export interface CreatePixBody {
  credentials: {
    token: string;
    name: string;
    publicKey?: string;
    organizationId?: string;
    useTax?: boolean;
    offer: {
      id: string;
      name: string;
    };
  };
  amount: number;
  description?: string;
  product?: {
    title: string;
  };
  items?: Array<{
    title: string;
    name: string;
    price: number;
    unitPrice: number;
    quantity: number;
    tangible: boolean;
  }>;
  customer: {
    phone: string;
    name: string;
    email: string;
    document: {
      type: "CPF" | "CNPJ";
      number: string;
    };
  };
}
