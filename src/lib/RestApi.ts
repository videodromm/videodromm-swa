import axios, { AxiosRequestConfig } from "axios";
import { CONFIG } from "../config";
import { nowId } from "../lib/Utils";

const headers: AxiosRequestConfig = {
  headers: {
    accept: "text/plain",
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const urllog = `${CONFIG.apiUrl}log`;

export const postLog = async (
  data: any,
  component: string,
  app: string = CONFIG.appName
) => {
  let rtn: any = {};
  let logData: string = "";
  if (typeof data === "string") {
    logData = data;
  } else {
    logData = JSON.stringify(data);
  }
  await axios
    .post(
      urllog,
      {
        id: nowId(),
        message: logData,
        createdBy: app,
        component: component,
        dernierevue: new Date().toLocaleString("fr-FR", {
          timeZone: "Europe/Paris",
        }),
      },
      headers
    )
    .then((response) => {
      console.log(`POST restapi postLog ${urllog} status: ${response.status}`);
      if (response.status === 200) {
        console.log(
          `POST OK restapi postLog ${urllog}:  ${response.data.length}`
        );

        rtn = response.data;
      } else {
        console.log(
          `ERREUR restapi postLog post ${urllog}: ${response} status: ${response.status}`
        );
      }
    })
    .catch((error) => {
      console.error(`restapi postLog post ${urllog}: ${error}`);
    });
  return rtn;
};
