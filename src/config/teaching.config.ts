import { TeachingConfigData } from '../types';
// @ts-ignore
import rawTeachingConfig from '../../teaching.config.js';

export const teachingConfig: TeachingConfigData = rawTeachingConfig as TeachingConfigData;
export default teachingConfig;
