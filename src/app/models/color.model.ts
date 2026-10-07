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
    colorNumber: String,
    colorName: String,
    lrvNumber?: Number,
    lrvDescription?: String,
    locationNumber?: String,
    tintedPrimer?: String,
    limitations?: String,
    interiorBase?: String,
    exteriorBase?: String,
    colorSection: String,
    isBase?: boolean,
    hexCode?: String
}
