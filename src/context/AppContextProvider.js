import { CombineContexts } from './CombineContexts';
import { InfoData, ServicesData } from './context';

const providers = [
 InfoData,
 ServicesData
]

export const AppContextProvider = CombineContexts(...providers);