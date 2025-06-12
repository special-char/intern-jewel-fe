import { useEffect, useMemo, useState } from "react";
import { isEqual } from "lodash";

const useProductOptions = (product: any) => {
  const [options, setOptions] = useState<Record<string, string>>({});
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});
  const variants = product.variants;

  useEffect(() => {
    const optionObj: Record<string, string> = {};
    const queryOptions: Record<string, string> = {};
    const defaultVariants = product.options?.map((option: any) => {
      return { id: option.id, val: option.values[0], title: option.title };
    });
    for (const option of defaultVariants || []) {
      Object.assign(optionObj, { [option.id]: option.val.value });
      Object.assign(queryOptions, { [option.title]: option.val.value });
    }
    setOptions(optionObj);
    setQueryParams(queryOptions);
  }, [product]);

  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {};
    for (const variant of variants) {
      if (!variant.options || !variant.id) continue;
      const temp: Record<string, string> = {};
      for (const option of variant.options) {
        temp[option.option_id] = option.value;
      }
      map[variant.id] = temp;
    }
    return map;
  }, [variants]);

  const variant = useMemo(() => {
    let variantId: string | undefined = undefined;
    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key;
      }
    }
    return variants.find((v: any) => v.id === variantId);
  }, [options, variantRecord, variants]);

  useEffect(() => {
    if (variants.length === 1 && variants[0].id) {
      setOptions(variantRecord[variants[0].id]);
    }
  }, [variants, variantRecord]);

  const updateOptions = (update: Record<string, string>) => {
    const data = { ...options, ...update };
    setOptions(data);
  };

  return { options, setOptions, queryParams, setQueryParams, variant, variantRecord };
};

export default useProductOptions; 