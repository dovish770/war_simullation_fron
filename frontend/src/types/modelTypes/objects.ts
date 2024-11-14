const area_dict: { [key: string]: string } = {
    "south": "IDF - South",
    "center": "IDF - Center",
    "north": "IDF - North",
    "west bank": "IDF - West Bank"
};

export const areaRules: {[key:string]: [string,string]} = {
    "Hezbollah": ["north", "center"],
    "Hamas": ["south", "center"],
    "IRGC": ["north", "west bank"],
    "Houthis": ["west bank", "south"]
}

export const organizations = ["idf", "Hezbollah", "Hamas", "IRGC", "Houthis"];
export const regions = ["North", "South", "Center", "West Bank"];

export default area_dict