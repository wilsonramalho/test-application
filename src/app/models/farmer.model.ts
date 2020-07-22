import { Address } from './address.model';
import { Document } from './document.model';
export interface Farmer {
  id?: string;
  document: Document;
  name: string;
  address: Address;
}
