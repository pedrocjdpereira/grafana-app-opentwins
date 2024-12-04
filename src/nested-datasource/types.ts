import type { DataSourceJsonData } from '@grafana/data';
import type { DataQuery } from '@grafana/schema';

export interface MyQuery extends DataQuery {
  queryText?: string;
  constant: number;
}

export const defaultQuery: Partial<MyQuery> = {
  constant: 6.5,
};

export interface DataPoint {
  Time: number;
  Value: number;
}
export interface DataSourceResponse {
  datapoints: DataPoint[];
}

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  path?: string;
  baseUrl?: string;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface MySecureJsonData {
  apiKey?: string;
}