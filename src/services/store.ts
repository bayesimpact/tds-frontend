import { connect, createStore } from 'babydux'
import { HydratedProvider, POSTProvidersRequest, RepresentativePoint } from './api'
import { withEffects } from './effects'

export type Actions = {

  /**
   * Counties selected by the user in the Service Area Drawer.
   *
   * `COUNTIES` (in zipCodes.ts) enumerates all available Counties.
   */
  counties: string[]

  distribution: number
  measure: '15_miles' | '20_miles' | '30_miles'

  /**
   * Geocoded providers, augmented with metadata from the uploaded providers CSV
   */
  providers: GeoJSON.FeatureCollection<GeoJSON.GeometryObject> | null

  /**
   * Representative points, fetched and cached given a `distribution` and `serviceArea`.
   */
  representativePoints: GeoJSON.FeatureCollection<GeoJSON.GeometryObject> | null

  /**
   * Strings representing county-zip tuples selected by the user in the
   * Service Area Drawer. For example, `["Yolo", "95606"]` maps to the
   * string `"Yolo-95606"`. This representation makes it cheap to compare
   * county-zip tuples because strings are reference-equal, but arrays are
   * not. It also makes it easy to get back the original county-zip tuple.
   *
   * We refer to each county-zip tuple as a *Service Area*.
   *
   * `SERVICE_AREAS` (in zipCodes.ts) enumerates all available Service Areas.
   */
  serviceAreas: string[]

  standard: 'time_distance' | 'time' | 'distance'

  /**
   * Parsed from the uploaded providers CSV
   */
  uploadedProviders: POSTProvidersRequest[]

  /**
   * Filename of the CSV the user uploaded to compute `providers`.
   */
  uploadedProvidersFilename: string | null

  /**
   * Filename of the CSV the user uploaded to compute `serviceAreas`.
   */
  uploadedServiceAreasFilename: string | null
}

export let store = withEffects(createStore<Actions>({
  counties: [],
  distribution: 0.5,
  measure: '15_miles',
  providers: null,
  representativePoints: null,
  serviceAreas: [],
  standard: 'time_distance',
  uploadedProviders: [],
  uploadedProvidersFilename: null,
  uploadedServiceAreasFilename: null
}, true))

export let withStore = connect(store)
