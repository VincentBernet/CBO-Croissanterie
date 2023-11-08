import { memberListType, } from "./members-list-type";

const MockInitialTeamMembers: memberListType = [
    { name: 'Islam' },
    { name: 'Kevin' },
    { name: 'Vincent' },
    { name: 'Oum' },
    { name: 'Jeremy' },
    { name: 'Virgil' },
    { name: 'Soumaya' },

    // Derniers membres à être passés
    //{ name: 'Jean-Christophe' },
    //{ name: 'Claudia' },

    // Absent pour cette semaine

    // Immunité temporaire
    //{ name: 'Jean' },
    //{ name: 'Cherif' },

    // Plus dans l'équipe
    //{ name: 'Swan' },
    //{ name: 'Hakima' },
    //{ name: 'Aya' },
    //{ name: 'Stéphane' },
    //{ name: 'Wendy' },
];

const MockCurrentTeamMembers: memberListType = [
    { name: 'Islam' },
    { name: 'Kevin' },
    { name: 'Vincent' },
    { name: 'Oum' },
    { name: 'Jeremy' },
    { name: 'Virgil' },
    { name: 'Soumaya' },

    // Derniers membres à être passés
    //{ name: 'Jean-Christophe' },
    //{ name: 'Claudia' },

    // Absent pour cette semaine

    // Immunité temporaire
    //{ name: 'Jean' },
    //{ name: 'Cherif' },

    // Plus dans l'équipe
    //{ name: 'Swan' },
    //{ name: 'Hakima' },
    //{ name: 'Aya' },
    //{ name: 'Stéphane' },
    //{ name: 'Wendy' },
];

const MockBeginingTimer: number = 15 * 60;
const MockEndingTimer: number = 16 * 60;
const MockCurrentDate: Date = new Date;

export { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTimer, MockEndingTimer, MockCurrentDate }