import moment from "moment";

export const formatHour = (timestamp: number): string => {
  return moment.unix(timestamp).format(`h\u00A0A`);
};

export const formatDay = (date: string): string => {
  return moment(date).format("dddd");
};
