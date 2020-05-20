import { UuidGeneratorElement as UuidGenerator } from './src/UuidGenerator';

export { UuidGenerator };
declare global {
  interface HTMLElementTagNameMap {
    "uuid-generator": UuidGenerator;
  }
}
