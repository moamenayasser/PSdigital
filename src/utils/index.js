// Get Country and Language from Params
export const getCountryAndLocale = (params) => {
  const { lang } = params;

  const countryLangArray = lang?.split("-");

  return {
    country: countryLangArray[0],
    lang: countryLangArray[1],
  };
};
