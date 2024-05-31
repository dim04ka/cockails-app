export interface IValue {
    [key: string]: string
    idDrink: string
    strDrink: string
    strCategory: string
    strGlass: string
    strDrinkThumb: string
    strInstructions: string
}

export type IDataSource = { drinks: IValue[] }

export interface IItem {
    code: string
    name: string
}
