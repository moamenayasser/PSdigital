"use client";

import { createContext } from "react";
import { isKeyExist, handleGetKeyValue, createNewKey } from "@/utils/translate";

export const ResourcesContext = createContext();

const ResourcesProvider = async (props) => {
  const { children, locale, data } = props;

  const useTranslate = (key) => {
    const keyValues = isKeyExist(data, key);

    if (keyValues.length !== 0) {
      return handleGetKeyValue(keyValues, locale);
    }

    console.log("Create Key ", key);
    return createNewKey(key);
  };

  const getSocialMedias = () => {
    return data?.SocialMedia;
  };

  return (
    <ResourcesContext.Provider value={{ useTranslate, getSocialMedias }}>
      {children}
    </ResourcesContext.Provider>
  );
};

export default ResourcesProvider;
