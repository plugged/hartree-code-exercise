import {
  applyFieldOverrides,
  DataFrame,
  FieldType,
  GrafanaTheme2,
  MutableDataFrame,
} from "@grafana/data";
import { useTheme2 } from "@grafana/ui";
import { useMemo } from "react";

const addThemeToData = (data: DataFrame[], theme: GrafanaTheme2) =>
  applyFieldOverrides({
    data: data,
    fieldConfig: {
      overrides: [],
      defaults: {},
    },
    theme,
    replaceVariables: (value: string) => value,
  });

export const useBuildData = (data: Array<any>) => {
  const theme = useTheme2();

  return useMemo(() => {
    const dataFrame = new MutableDataFrame({
      fields: [
        {
          name: " ",
          type: FieldType.string,
          values: [],
          config: {
            custom: {
              width: 48,
              displayMode: "image",
            },
          },
        },
        { name: "Title", type: FieldType.string, values: [] },
        {
          name: "Price",
          type: FieldType.number,
          values: [],
          config: { custom: { align: "left", width: 100 } },
        },
        {
          name: "Discount (%)",
          type: FieldType.number,
          values: [],
          config: { custom: { align: "left", width: 100 } },
        },
        {
          name: "Rating",
          type: FieldType.number,
          values: [],
          config: {
            min: 0,
            max: 5,
            custom: {
              width: 200,
              displayMode: "gradient-gauge",
            },
          },
        },
      ],
    });
    for (let item of data) {
      dataFrame.appendRow([
        item.thumbnail,
        item.title,
        item.price,
        item.discountPercentage,
        item.rating,
      ]);
    }

    return addThemeToData([dataFrame], theme)[0];
  }, [data, theme]);
};
