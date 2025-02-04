export interface PackageProps {
  name: string;
  slug: string;
  price: {
    from: string;
    to: string;
  };
  features: string[];
  note: string;
  createdAt: Date;
  updateAt: Date;
}
