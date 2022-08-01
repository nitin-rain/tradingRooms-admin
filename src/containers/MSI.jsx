/** @format */

import React, { useEffect, useState } from "react";
import PageLayout from "./PageLayout";
import { misTableStyles } from "../styles/mis-table/mis.styles";

export default function MSI() {
  const classes = misTableStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const req = await fetch(
        "https://api.raintech.ai/Raindrop/TR/trade.php?adminpass=@misdata!!321&apicall=generatemis"
      );
      const resp = await req.json();
      const { E, D, M } = resp;

      if (E) throw new Error(M);
      setData(D);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageLayout>
      <div>
        <h1>MIS</h1>
      </div>

      {data && (
        <div className={classes.tableContainer}>
          <table cellSpacing={0} className={classes.table}>
            <thead>
              <tr>
                {Object.keys(data[0]).map((title) => (
                  <th key={title}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((x) => (
                <tr>
                  {Object.keys(x).map((key) => (
                    <td key={key}>{x[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isLoading && <h2>Loading...</h2>}
    </PageLayout>
  );
}
