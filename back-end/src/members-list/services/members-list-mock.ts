import { memberListType, } from "./members-list-type";

const MockInitialTeamMembers: memberListType = [
    { name: 'Islam' },
    { name: 'Kevin' },
    { name: 'Oum' },
    { name: 'Jeremy' },
    { name: 'Claudia' },
    { name: 'Swan' },
    { name: 'Soumaya' },
    /* Derniers membres à être passés
    { name: 'Jean-Christophe' },
    { name: 'Virgil' },
    */

    /* Absent pour cette semaine
    
    */
    /* Immunité temporaire
    // Alternant
     { name: 'Cherif' },
    // Plus dans l'équipe
    //{ name: 'Vincent' },
    //{ name: 'Hakima' },
    //{ name: 'Aya' },
    //{ name: 'Stéphane' },
    //{ name: 'Wendy' },
    //{ name: 'Jean' },
    */
];

const MockCurrentTeamMembers: memberListType = [
    { name: 'Islam' },
    { name: 'Kevin' },
    { name: 'Oum' },
    { name: 'Jeremy' },
    { name: 'Soumaya' },
    { name: 'Claudia' },
    { name: 'Swan' },
    /* Derniers membres à être passés
    { name: 'Jean-Christophe' },
    { name: 'Virgil' },
    */

    // Absent pour cette semaine
    
     /* Immunité temporaire
    // Alternant
     { name: 'Cherif' },
    // Plus dans l'équipe
    //{ name: 'Vincent' },
    //{ name: 'Hakima' },
    //{ name: 'Aya' },
    //{ name: 'Stéphane' },
    //{ name: 'Wendy' },
    //{ name: 'Jean' },
    */
];

const MockBeginingTimer: number = 15 * 60;
const MockEndingTimer: number = 16 * 60;
const MockCurrentDate: Date = new Date;

export { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTimer, MockEndingTimer, MockCurrentDate }
