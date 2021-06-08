import { Joi } from 'celebrate';

import cnpj from './extensions/cnpj';

const JoiCnpjExtension = {
  type: 'cnpj',
  base: Joi.string(),
  messages: {
    cnpj: 'cnpj is not valid',
  },
  validate(value: any, helpers: any) {
    if (!cnpj.isValid(value, true)) {
      return { value, errors: helpers.error('cnpj', { v: value }) };
    }

    return { value };
  },
};

const extendedJoi = Joi.extend((_joi) => JoiCnpjExtension);

export default extendedJoi;
