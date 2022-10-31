import { memberListType, } from "./members-list-type";

const MockInitialTeamMembers: memberListType = [{ name: 'Vincent' },
{ name: 'Kevin' }, { name: 'Jean' }, { name: 'Jean-Christophe' }, { name: 'Hakima' }, { name: 'Aya' }, { name: 'Virgil' }, { name: 'Stéphane' }, { name: 'Wendy' }, { name: 'Oum' }, { name: 'Jeremy' }, { name: 'Claudia' }];

const MockCurrentTeamMembers: memberListType = [{ name: 'Vincent' },
{ name: 'Kevin' }, { name: 'Jean' }, { name: 'Jean-Christophe' }, { name: 'Hakima' }, { name: 'Aya' }, { name: 'Virgil' }, { name: 'Stéphane' }, { name: 'Wendy' }, { name: 'Oum' }, { name: 'Jeremy' }, { name: 'Claudia' }];

const MockBeginingTime: number = 0;
const MockEndingTime: number = 18 * 60;
const MockCurrentDate: Date = new Date;
const MockCurrentDateInMinute: number = (MockCurrentDate.getHours() * 60) + MockCurrentDate.getMinutes() + (MockCurrentDate.getSeconds() / 60);

export { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTime, MockEndingTime, MockCurrentDate, MockCurrentDateInMinute }