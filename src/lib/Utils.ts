import { Preferences } from "@capacitor/preferences";

export const setPreferences = async (key: string, value: string) => {
  await Preferences.set({
    key: key,
    value: value,
  });
};
export const getPreferences = async () => {
  const { value } = await Preferences.get({ key: 'serverUrl' });
  return value;
}
export const nowId = () => {
  const now = new Date();
  const localTimeStr = `${now.getHours()}.${now.getMinutes()}.${now.getSeconds()}.${now.getMilliseconds()}`;
  return localTimeStr;
};
export const formatDate = (minuteToAdd:number = 0) => {
  const date:Date = new Date();
  let h:number = date.getHours();
  let min:number = date.getMinutes() + minuteToAdd;
  if (min > 59) {
    h++;
    min = min - 60;
  } 
  const hour:string = (h < 10 ? "0" : "") + h;
  const minutes:string = (min < 10 ? "0" : "") + min;
  const month:number = date.getMonth() + 1;
  const mois:string = (month < 10 ? "0" : "") + month;
  const day:number = date.getDate();
  const jour:string = (day < 10 ? "0" : "") + day;
  const formattedDate:string = date.getFullYear() + "." + mois + "." + jour + "." + hour + "." + minutes;
  return formattedDate;
};

