import React, { FC } from "react";
import { Alert, Spinner, Table } from "@grafana/ui";

import { useProducts } from "../../api/Products/useProducts";
import styles from "./Products.module.css";
import { useBuildData } from "./Products.hooks";

export const Products: FC = () => {
  const { data, error, isLoading } = useProducts();

  const tableData = useBuildData(data?.products || []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error instanceof Error) {
    return <Alert title={error.message} />;
  }

  return (
    <div className={styles.tableContainer}>
      <Table data={tableData} width={700} height={500} />
    </div>
  );
};
