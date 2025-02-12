/* eslint-disable no-console */
const FORMATS = {
    small: { year: '2-digit', month: 'numeric', day: 'numeric' },
    medium: { year: 'numeric', month: '2-digit', day: '2-digit' },
    large: { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' },
};

export default function formatDate(date, formatStyle = 'medium') {
    if (date) {
        try {
            const options = FORMATS[formatStyle] || FORMATS.medium;
            const value = typeof date === 'string' ? new Date(date) : date;
            return new Intl.DateTimeFormat('en-US', options).format(value);
        } catch (error) {
            console.error(error);
            return '';
        }
    }
    console.error('Invalid date value passed to DatePicker');
    return '';
}
