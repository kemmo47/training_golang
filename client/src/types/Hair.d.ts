// eslint-disable-next-line import/extensions
import type hairs from '../../public/data/JSON.json';

type Hair = typeof hairs[number];

type HairPropertyBooleanType = {
  [k in keyof Hair]: Hair[k] extends boolean ? k : never;
}[keyof Hair];
