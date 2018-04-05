/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Request shape for POST /api/representative_points/
 */
export interface PostRepresentativePointsRequest {
  /**
   * Service area IDs in the format "state_city_zip".
   * For example, ["ca_san_francisco_94014", "ca_san_francisco_94015"]
   */
  service_area_ids: string[]
  /**
   * Defines if frontend requests census data at the representative point level.
   */
  include_census_data?: boolean
}
