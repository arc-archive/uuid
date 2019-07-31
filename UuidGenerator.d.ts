/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   UuidGenerator.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

export {UuidGenerator};

declare namespace LogicElements {

  /**
   * An UUID generator.
   *
   * ## Example
   * ```html
   * <uuid-generator auto last-uuid="{{generatedUuid}}"></uuid-generator>
   * ```
   */
  class UuidGenerator extends HTMLElement {
    auto: any;
    lastUuid: any;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    _genLut(): any;
    _autoChanged(state: any): void;

    /**
     * Creates an UUID string
     *
     * @returns Generated value
     */
    _hash(): String|null;

    /**
     * Generate a RFC4122, version 4 ID. Example:
     * "92329D39-6F5C-4520-ABFC-AAB64544E172"
     * http://stackoverflow.com/a/21963136/1127848
     *
     * @returns The UUID string.
     */
    generate(): String|null;
  }
}