import Config from 'react-native-config'

export const makeApiUrl = (path: string): string => `${Config.URL_API}${path}`
