/**
@license
Copyright 2018 Pawel Psztyc, The ARC team
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import generate from './v4.js';
/**
 * An UUID generator.
 *
 * ## Example
 * ```html
 * <uuid-generator auto></uuid-generator>
 * ```
 */
export class UuidGeneratorElement extends HTMLElement {
  get auto() {
    return this._auto;
  }

  /**
   * If set it generates uuid and sets it to `lastUuid` once the element
   * is ready.
   *
   * @param {boolean} value
   */
  set auto(value) {
    if (this._auto === value) {
      return;
    }
    this._auto = value;
    if (value && !this.hasAttribute('auto')) {
      this.setAttribute('auto', '');
    } else if (!value && this.hasAttribute('auto')) {
      this.removeAttribute('auto');
    }
    this._autoChanged(value);
  }

  get lastUuid() {
    return this._lastUuid;
  }

  static get observedAttributes() {
    return ['auto'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Only "auto" is allowed to run this callback
    if (newValue === null) {
      this.auto = false;
    } else {
      this.auto = true;
    }
  }

  connectedCallback() {
    if (!this.hasAttribute('aria-hidden')) {
      this.setAttribute('aria-hidden', 'true');
    }
  }

  _autoChanged(state) {
    if (!state) {
      return;
    }
    this.generate();
  }

  /**
   * Generate a RFC4122, version 4 ID. Example:
   * "92329D39-6F5C-4520-ABFC-AAB64544E172"
   * http://stackoverflow.com/a/21963136/1127848
   * @return {String} The UUID string.
   */
  generate() {
    const value = generate();
    this._lastUuid = value;
    this.dispatchEvent(
      new CustomEvent('last-uuid-changed', {
        detail: {
          value,
        },
      })
    );
    return this.lastUuid;
  }
}
