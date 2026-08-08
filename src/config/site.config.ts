import { SiteConfigData } from '../types';
// @ts-ignore
import rawSiteConfig from '../../site.config.js';

export const siteConfig: SiteConfigData = rawSiteConfig as SiteConfigData;
export default siteConfig;
