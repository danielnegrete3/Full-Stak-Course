export const WeatherTypes = {
  Rainy: 'rainy',
  Sunny: 'sunny',
  Windy: 'windy',
  Cloudy: 'cloudy',
  Stormy: 'stormy',
} as const;

export type WeatherTypes = typeof WeatherTypes[keyof typeof WeatherTypes];

export const VisibilityType = {
  Poor: 'poor',
  Good: 'good',
  Great: 'great',
  Ok: 'ok',
} as const;

export type VisibilityType = typeof VisibilityType[keyof typeof VisibilityType];

export interface DiaryType{
    id:string
    date: string
    comment:string
    weather: WeatherTypes
    visibility: VisibilityType
}

export type NewDiary = Omit<DiaryType,'id'>