import { memberListType, timeFormat } from "./interface";

const MockCurrentTeamMembers: memberListType = [{ name: 'Vincent' },
{ name: 'Kevin' }, { name: 'Jean' }, { name: 'Jean-Christophe' }, { name: 'Hakima' }, { name: 'Aya' }, { name: 'Virgil' }, { name: 'Stéphane' }, { name: 'Wendy' }, { name: 'Oum' }, { name: 'Jeremy' }, { name: 'Claudia' }];

const MockEmptyTeamMembers: memberListType = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' },];

const MockTimerTillNextDeletion: number | boolean = 100;
const MockBeginingTime: timeFormat = { hours: 0, minutes: 0, seconds: 0 };
const MockEndingTime: timeFormat = { hours: 0, minutes: 0, seconds: 0 };

export { MockCurrentTeamMembers, MockEmptyTeamMembers, MockTimerTillNextDeletion, MockBeginingTime, MockEndingTime };