/**
 * An UUID generator.
 *
 * ## Example
 * ```html
 * <uuid-generator auto></uuid-generator>
 * ```
 */
export declare class UuidGeneratorElement extends HTMLElement {
  /**
   * If set it generates uuid and sets it to `lastUuid` once the element
   * is ready.
   */
  auto: boolean;
  lastUuid: string;

  attributeChangedCallback(name: string, oldValue: string|null, newValue: string|null): void;

  _autoChanged(state: boolean): void;

  /**
   * Generate a RFC4122, version 4 ID. Example:
   * "92329D39-6F5C-4520-ABFC-AAB64544E172"
   * http://stackoverflow.com/a/21963136/1127848
   *
   * @returns The UUID string.
   */
  generate(): String|null;
}
