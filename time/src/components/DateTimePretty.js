import React, { Component } from 'react';
import DateTime from './DateTime';

const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
        number % 100 > 4 && number % 100 < 20
            ? 2
            : cases[number % 10 < 5 ? number % 10 : 5]
        ];
};

const dateTimeHOC = WrappedComponent => {
    return class extends Component {
        getRelativeTime = () => {
            const dateNow = new Date();
            const componentDate = new Date(this.props.date);
            const timeRemaining  = dateNow - componentDate;


            const minutes = Math.floor(timeRemaining  / (1000 * 60));
            const hours = Math.floor(timeRemaining  / ((1000 * 60) * 60));
            const days = Math.floor(timeRemaining  / (((1000 * 60) * 60) * 24));

            if (hours < 1) {
                return `${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])} назад`;
            } else if (days < 1) {
                return `${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])} назад`;
            }
            return `${days} ${declOfNum(days, ['день', 'дня', 'дней'])} назад`;
        };

        render() {
            const { date } = this.props;
            return <WrappedComponent date={this.getRelativeTime(date)} />;
        }
    };
};

const DateTimePretty = dateTimeHOC(DateTime);

export default DateTimePretty;
