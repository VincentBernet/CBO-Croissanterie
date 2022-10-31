import { memberListType } from "./interface";

const MockCurrentTeamMembers: memberListType = [{ name: 'Vincent' },
{ name: 'Kevin' }, { name: 'Jean' }, { name: 'Jean-Christophe' }, { name: 'Hakima' }, { name: 'Aya' }, { name: 'Virgil' }, { name: 'Stéphane' }, { name: 'Wendy' }, { name: 'Oum' }, { name: 'Jeremy' }, { name: 'Claudia' }];

const MockEmptyTeamMembers: memberListType = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' },];

const MockTimerTillNextDeletion = "00:00:00";

export { MockCurrentTeamMembers, MockEmptyTeamMembers, MockTimerTillNextDeletion };