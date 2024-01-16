import { memberListType, } from "./members-list-type";

const MockInitialTeamMembers: memberListType = [
    { name: 'Islam' },
    { name: 'Kevin' },
    { name: 'Oum' },
    { name: 'Jeremy' },
    { name: 'Jean-Christophe' },
    { name: 'Claudia' },
    { name: 'Swan' },
    { name: 'Cherif' },
    /* Derniers membres à être passés
    { name: 'Virgil' },
    */

    /* Absent pour cette semaine
    { name: 'Soumaya' },
    */
    // Immunité temporaire
    
    // Plus dans l'équipe
    //{ name: 'Vincent' },
    //{ name: 'Hakima' },
    //{ name: 'Aya' },
    //{ name: 'Stéphane' },
    //{ name: 'Wendy' },
    //{ name: 'Jean' },
];

const MockCurrentTeamMembers: memberListType = [
    { name: 'Islam' },
    { name: 'Kevin' },
    { name: 'Oum' },
    { name: 'Jeremy' },
    { name: 'Virgil' },
    { name: 'Soumaya' },
    { name: 'Jean-Christophe' },
    { name: 'Claudia' },
    { name: 'Swan' },
    { name: 'Cherif' },
    // Derniers membres à être passés

    // Absent pour cette semaine

    // Immunité temporaire
    
    // Plus dans l'équipe
    //{ name: 'Vincent' },
    //{ name: 'Hakima' },
    //{ name: 'Aya' },
    //{ name: 'Stéphane' },
    //{ name: 'Wendy' },
    //{ name: 'Jean' },
];

const MockBeginingTimer: number = 15 * 60;
const MockEndingTimer: number = 16 * 60;
const MockCurrentDate: Date = new Date;

export { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTimer, MockEndingTimer, MockCurrentDate }
