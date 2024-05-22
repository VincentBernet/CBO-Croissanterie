import { memberListType, } from "./members-list-type";

const MockInitialTeamMembers: memberListType = [
    { name: 'Islam' },
    { name: 'Choix de JC' },
    { name: 'Oum' },
    { name: 'Jeremy' },
    { name: 'Virgil' },
    { name: 'Soumaya' },
    { name: 'Swan' },
    { name: 'Kevin' },
    /* Derniers membres à être passés

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
    //{ name: 'Claudia' },
    //{ name: 'Jean-Christophe' },
    */
];

const MockCurrentTeamMembers: memberListType = [
    { name: 'Islam' },
    { name: 'Choix de JC' },
    { name: 'Oum' },
    { name: 'Jeremy' },
    { name: 'Virgil' },
    { name: 'Swan' },
    { name: 'Kevin' },
    { name: 'Soumaya' },
    /* Derniers membres à être passés
    { name: 'Soumaya' },

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
    //{ name: 'Claudia' },
    //{ name: 'Jean-Christophe' },
    */
];

const MockBeginingTimer: number = 15 * 60;
const MockEndingTimer: number = 16 * 60;
const MockCurrentDate: Date = new Date;

export { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTimer, MockEndingTimer, MockCurrentDate }
