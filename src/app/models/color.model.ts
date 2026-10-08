/**
 * This will act as our model for any Color pulled from the database:
 * It will need to have the following items:
 * 
 *  ------ MANDATORY ITEMS --------
 *           Company
 *           Color Number
 *           Color Name
 *           Color Section
 * --------------------------------
 * ------- The rest are allowed to be null -------
 * LRV Number (if applicable)
 * LRV Text (if applicable)
 * Location Number (if applicable)
 * Tinted Primer (if applicable)
 * Limitations (if applicable)
 * Interior Base
 * Exterior Base
 * Is a Base (if applicable)
 * Hex Code (if applicable)
 * -----------------------------------------------
 * 
 */

export interface Color {
    companyName: string,
    colorNumber: string,
    colorName: string,
    lrvNumber?: number,
    lrvDescription?: string,
    locationNumber?: string,
    tintedPrimer?: string,
    limitations?: string,
    interiorBase?: string,
    exteriorBase?: string,
    colorSection: string,
    isBase?: boolean,
    hexCode?: string
}
