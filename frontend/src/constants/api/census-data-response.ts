/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CensusCategoryInfo = {
  [k: string]: number
}[]

/**
 * Response shape for POST /api/census-data-by-service-area/
 */
export interface PostCensusDataResponse {
  [k: string]: {
    [k: string]: CensusCategoryInfo
  }[]
}
