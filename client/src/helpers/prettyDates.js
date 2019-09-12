import moment from 'moment';

export const timeSince = (date) => {
    return moment.duration(Date.now() - Date.parse(date)).humanize();
}