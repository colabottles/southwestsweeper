import type { EntryFieldTypes } from "contentful";

export interface RentalItem {
  contentTypeId: "rentalItem";
  fields: {
    category: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    costPerDay: EntryFieldTypes.Number;
    costPerWeek: EntryFieldTypes.Number;
    costPerMonth: EntryFieldTypes.Number;
    sortOrder: EntryFieldTypes.Integer;
  };
}

export interface InventoryItem {
  contentTypeId: "inventoryItem";
  fields: {
    name: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    pricePerDay: EntryFieldTypes.Number;
    pricePerWeek: EntryFieldTypes.Number;
    pricePerMonth: EntryFieldTypes.Number;
    inStock: EntryFieldTypes.Boolean;
    image?: EntryFieldTypes.AssetLink;
  };
}