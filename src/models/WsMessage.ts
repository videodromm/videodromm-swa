export interface Payload {
  name: number;
  value: number;
}

export interface WsMessage {
  params: Payload[];
}
