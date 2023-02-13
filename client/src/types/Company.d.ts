// eslint-disable-next-line import/extensions
import type companies from '../../public/data/JSON.json';

type Company = typeof companies[number];

// CompanyPropertyBoolean is list of key have value have type is boolean Ex: online | telephone | ...
type CompanyPropertyBooleanType = {
  [k in keyof Company]: Company[k] extends boolean ? k : never | string;
}[keyof Company];
