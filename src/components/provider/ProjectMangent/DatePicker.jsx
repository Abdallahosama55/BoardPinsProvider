// DatePicker.js
import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 12px;
    font-family: 'Poppins', sans-serif;
    font-weight:300
  
`;

const DateButton = styled.div`
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.selected ? '#E5E5FF' : 'transparent')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavButton = styled.div`
  padding: 10px;
  border-radius: 50%;
  background-color: #E5E5FF;
  cursor: pointer;
  margin: 0 10px;
`;

const DateText = styled.div`
  font-size:  ${(props) => (props.selected ? '14px' : '12px')};
  color: ${(props) => (props.selected ? '#5b5bff' : '#000')};
    font-weight: ${(props) => (props.selected ? '700' : '300')};
`;

const DateNumber = styled.div`
  font-size:  ${(props) => (props.selected ? '14px' : '12px')};
  color: ${(props) => (props.selected ? '#5b5bff' : '#000')};
  font-weight: ${(props) => (props.selected ? '700' : '300')};
`;

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (days) => {
    setSelectedDate(selectedDate.add(days, 'day'));
  };

  const renderDates = () => {
    const dates = [];
    for (let i = -7; i <= 7; i++) {
      const date = selectedDate.add(i, 'day');
      dates.push(
        <DateButton
          key={i}
          selected={date.isSame(selectedDate, 'day')}
          onClick={() => setSelectedDate(date)}
        >
          <DateText selected={date.isSame(selectedDate, 'day')}>
            {date.format('dd')}
          </DateText>
          <DateNumber selected={date.isSame(selectedDate, 'day')}>
            {date.format('D')}
          </DateNumber>
        </DateButton>
      );
    }
    return dates;
  };

  return (
    <DatePickerContainer>
      <NavButton onClick={() => handleDateChange(-7)}><MdOutlineKeyboardArrowLeft color='#6161FF' /></NavButton>
      {renderDates()}
      <NavButton onClick={() => handleDateChange(7)}><MdOutlineKeyboardArrowRight  color='#6161FF'/></NavButton>
    </DatePickerContainer>
  );
};

export default DatePicker;
